package queries

import (
	"fmt"
	"latvianKeyboardTypingPlatform/db"
)

func PostLessonCompletion(userId string, lessonId int) error {

	// cnsure the user exists
	_, err := InsertUserIfNotExists(userId)
	if err != nil {
		return fmt.Errorf("error ensuring user exists: %v", err)
	}

	query := `
		INSERT INTO "LessonCompletion" (userId, lessonId)
		VALUES ($1, $2)
		ON CONFLICT (userId, lessonId) DO NOTHING;
	`

	_, err = db.DB.Exec(query, userId, lessonId)
	if err != nil {
		return fmt.Errorf("error inserting lesson completion: %v", err)
	}

	return nil
}

func GetLessonCompletion(userId string, lessonIds string) (map[int]bool, error) {
	// Validate that lessonIds is not empty or malformed
	if lessonIds == "" {
		return nil, fmt.Errorf("lessonIds cannot be empty")
	}

	query := `
        SELECT lessonId
        FROM "LessonCompletion"
        WHERE userId = $1 AND lessonId IN (` + lessonIds + `);
    `

	rows, err := db.DB.Query(query, userId)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	result := make(map[int]bool)
	for rows.Next() {
		var lessonId int
		if err := rows.Scan(&lessonId); err != nil {
			return nil, err
		}
		result[lessonId] = true
	}

	return result, nil
}