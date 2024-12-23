package seed

import (
	"fmt"
	"latvianKeyboardTypingPlatform/db"
	"latvianKeyboardTypingPlatform/types"
	"os"
)

var poetTexts = []types.PoetText{

	{PoetTextId: 1, PoetAuthor: "dsd", PoetFragmentName: "fsf", PoetTextContent: "fdsfsdf"},
}

func SeedPoetTexts() {
	for _, poetText := range poetTexts {

		// check if the poet text already exists in the database by its Id
		var count int
		query := `SELECT COUNT(*) FROM "PoetTexts" WHERE poetTextId = $1`
		err := db.DB.QueryRow(query, poetText.PoetTextId).Scan(&count)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Error checking if poet text with ID %d exists: %v\n", poetText.PoetTextId, err)
			continue
		}

		// if the poet text doesn't exist, insert it into the database
		if count == 0 {
			insertQuery := `INSERT INTO "PoetTexts" (poetTextId, poetAuthor, poetFragmentName, poetTextContent) VALUES ($1, $2, $3, $4)`
			_, err := db.DB.Exec(insertQuery, poetText.PoetTextId, poetText.PoetAuthor, poetText.PoetFragmentName, poetText.PoetTextContent)
			if err != nil {
				fmt.Fprintf(os.Stderr, "Error inserting poet text with poetTextId %d: %v\n", poetText.PoetTextId, err)
			} else {
				fmt.Printf("Inserted poet text with poetTextId %d, author %s, fragment %s, text: %s\n", poetText.PoetTextId, poetText.PoetAuthor, poetText.PoetFragmentName, poetText.PoetTextContent)
			}
		}
	}
}
