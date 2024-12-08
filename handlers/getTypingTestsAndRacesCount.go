package handlers

import (
	"latvianKeyboardTypingPlatform/db/queries"
	"log"
	"net/http"

	"github.com/labstack/echo/v4"
)

func GetTypingTestsAndRacesCountHandler(c echo.Context) error {
	userId := c.QueryParam("userId")

	if userId == "" {
		return c.JSON(http.StatusBadRequest, map[string]string{
			"error": "User ID is required",
		})
	}

	testsCount, err := queries.GetTypingTestsCount(userId)
	if err != nil {
		log.Println("Error getting typing test count:", err)
		return c.JSON(http.StatusInternalServerError, map[string]string{
			"error": "Error getting typing test count.",
		})
	}

	racesCount, err := queries.GetTypingRacesCount(userId)
	if err != nil {
		log.Println("Error getting typing race count:", err)
		return c.JSON(http.StatusInternalServerError, map[string]string{
			"error": "Error getting typing race count.",
		})
	}

	return c.JSON(http.StatusOK, map[string]interface{}{
		"testsCount": testsCount,
		"racesCount": racesCount,
	})
}