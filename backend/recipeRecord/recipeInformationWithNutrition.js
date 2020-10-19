// the json from spoonacular "Get Recipe Information" endpoint
// we can use this to populate our own database
const recipeInformationWithNutrition = [
  {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": true,
    "sustainable": false,
    "weightWatcherSmartPoints": 2,
    "gaps": "no",
    "lowFodmap": false,
    "preparationMinutes": 10,
    "cookingMinutes": 20,
    "aggregateLikes": 9263,
    "spoonacularScore": 25,
    "healthScore": 1,
    "creditsText": "Pocket Change Gourmet",
    "sourceName": "Pocket Change Gourmet",
    "pricePerServing": 57.57,
    "extendedIngredients": [
    {
    "id": 1042035,
    "aisle": "Spices and Seasonings",
    "image": "garam-masala.jpg",
    "consistency": "solid",
    "name": "apple pie spice",
    "original": "1 teaspoon apple pie spice (recipe here)",
    "originalString": "1 teaspoon apple pie spice (recipe here)",
    "originalName": "apple pie spice (recipe here)",
    "amount": 1,
    "unit": "teaspoon",
    "meta": [
    "(recipe here)"
    ],
    "metaInformation": [
    "(recipe here)"
    ],
    "measures": {
    "us": {
    "amount": 1,
    "unitShort": "tsp",
    "unitLong": "teaspoon"
    },
    "metric": {
    "amount": 1,
    "unitShort": "tsp",
    "unitLong": "teaspoon"
    }
    }
    },
    {
    "id": 19334,
    "aisle": "Baking",
    "image": "light-brown-sugar.jpg",
    "consistency": "solid",
    "name": "brown sugar",
    "original": "4 tablespoons brown sugar",
    "originalString": "4 tablespoons brown sugar",
    "originalName": "brown sugar",
    "amount": 4,
    "unit": "tablespoons",
    "meta": [],
    "metaInformation": [],
    "measures": {
    "us": {
    "amount": 4,
    "unitShort": "Tbsps",
    "unitLong": "Tbsps"
    },
    "metric": {
    "amount": 4,
    "unitShort": "Tbsps",
    "unitLong": "Tbsps"
    }
    }
    },
    {
    "id": 20027,
    "aisle": "Baking",
    "image": "white-powder.jpg",
    "consistency": "solid",
    "name": "cornstarch",
    "original": "3 tablespoons cornstarch",
    "originalString": "3 tablespoons cornstarch",
    "originalName": "cornstarch",
    "amount": 3,
    "unit": "tablespoons",
    "meta": [],
    "metaInformation": [],
    "measures": {
    "us": {
    "amount": 3,
    "unitShort": "Tbsps",
    "unitLong": "Tbsps"
    },
    "metric": {
    "amount": 3,
    "unitShort": "Tbsps",
    "unitLong": "Tbsps"
    }
    }
    },
    {
    "id": 1059003,
    "aisle": "Produce",
    "image": "red-delicious-apples.png",
    "consistency": "solid",
    "name": "red delicious apples",
    "original": "5-6 cups golden delicious apples, cleaned, cored and cut into slices about 1/4 inch thick",
    "originalString": "5-6 cups golden delicious apples, cleaned, cored and cut into slices about 1/4 inch thick",
    "originalName": "golden delicious apples, cleaned, cored and cut into slices about 1/4 inch thick",
    "amount": 5,
    "unit": "cups",
    "meta": [
    "cored",
    "cleaned",
    "cut into slices 1/"
    ],
    "metaInformation": [
    "cored",
    "cleaned",
    "cut into slices 1/"
    ],
    "measures": {
    "us": {
    "amount": 5,
    "unitShort": "cups",
    "unitLong": "cups"
    },
    "metric": {
    "amount": 1.183,
    "unitShort": "l",
    "unitLong": "liters"
    }
    }
    }
    ],
    "id": 553847,
    "title": "Fried Apples",
    "readyInMinutes": 30,
    "servings": 6,
    "sourceUrl": "http://pocketchangegourmet.com/fried-apples/",
    "image": "https://spoonacular.com/recipeImages/553847-556x370.jpg",
    "imageType": "jpg",
    "nutrition": {
    "nutrients": [
    {
    "title": "Calories",
    "amount": 100.95,
    "unit": "cal",
    "percentOfDailyNeeds": 5.05
    },
    {
    "title": "Fat",
    "amount": 0.22,
    "unit": "g",
    "percentOfDailyNeeds": 0.34
    },
    {
    "title": "Saturated Fat",
    "amount": 0.05,
    "unit": "g",
    "percentOfDailyNeeds": 0.32
    },
    {
    "title": "Carbohydrates",
    "amount": 26.11,
    "unit": "g",
    "percentOfDailyNeeds": 8.7
    },
    {
    "title": "Net Carbohydrates",
    "amount": 23.53,
    "unit": "g",
    "percentOfDailyNeeds": 8.56
    },
    {
    "title": "Sugar",
    "amount": 18.61,
    "unit": "g",
    "percentOfDailyNeeds": 20.68
    },
    {
    "title": "Cholesterol",
    "amount": 0,
    "unit": "mg",
    "percentOfDailyNeeds": 0
    },
    {
    "title": "Sodium",
    "amount": 3.82,
    "unit": "mg",
    "percentOfDailyNeeds": 0.17
    },
    {
    "title": "Protein",
    "amount": 0.31,
    "unit": "g",
    "percentOfDailyNeeds": 0.62
    },
    {
    "title": "Fiber",
    "amount": 2.59,
    "unit": "g",
    "percentOfDailyNeeds": 10.34
    },
    {
    "title": "Vitamin C",
    "amount": 4.87,
    "unit": "mg",
    "percentOfDailyNeeds": 5.9
    },
    {
    "title": "Manganese",
    "amount": 0.1,
    "unit": "mg",
    "percentOfDailyNeeds": 4.83
    },
    {
    "title": "Potassium",
    "amount": 124.43,
    "unit": "mg",
    "percentOfDailyNeeds": 3.56
    },
    {
    "title": "Vitamin B6",
    "amount": 0.05,
    "unit": "mg",
    "percentOfDailyNeeds": 2.37
    },
    {
    "title": "Vitamin K",
    "amount": 2.39,
    "unit": "µg",
    "percentOfDailyNeeds": 2.27
    },
    {
    "title": "Copper",
    "amount": 0.04,
    "unit": "mg",
    "percentOfDailyNeeds": 1.77
    },
    {
    "title": "Magnesium",
    "amount": 6.5,
    "unit": "mg",
    "percentOfDailyNeeds": 1.63
    },
    {
    "title": "Vitamin B2",
    "amount": 0.03,
    "unit": "mg",
    "percentOfDailyNeeds": 1.62
    },
    {
    "title": "Calcium",
    "amount": 15.24,
    "unit": "mg",
    "percentOfDailyNeeds": 1.52
    },
    {
    "title": "Iron",
    "amount": 0.27,
    "unit": "mg",
    "percentOfDailyNeeds": 1.48
    },
    {
    "title": "Vitamin E",
    "amount": 0.19,
    "unit": "mg",
    "percentOfDailyNeeds": 1.29
    },
    {
    "title": "Phosphorus",
    "amount": 12.69,
    "unit": "mg",
    "percentOfDailyNeeds": 1.27
    },
    {
    "title": "Vitamin B1",
    "amount": 0.02,
    "unit": "mg",
    "percentOfDailyNeeds": 1.21
    },
    {
    "title": "Vitamin A",
    "amount": 57.12,
    "unit": "IU",
    "percentOfDailyNeeds": 1.14
    }
    ],
    "properties": [
    {
    "title": "Glycemic Index",
    "amount": 5.33,
    "unit": ""
    },
    {
    "title": "Glycemic Load",
    "amount": 3.8,
    "unit": ""
    }
    ],
    "ingredients": [
    {
    "name": "apple pie spice",
    "amount": 0.17,
    "unit": "teaspoon",
    "nutrients": [
    {
    "name": "Alcohol",
    "amount": 0,
    "unit": "g"
    },
    {
    "name": "Vitamin B2",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Mono Unsaturated Fat",
    "amount": 0,
    "unit": "g"
    },
    {
    "name": "Copper",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Calories",
    "amount": 1.14,
    "unit": "cal"
    },
    {
    "name": "Fiber",
    "amount": 0.05,
    "unit": "g"
    },
    {
    "name": "Selenium",
    "amount": 0.03,
    "unit": "µg"
    },
    {
    "name": "Saturated Fat",
    "amount": 0.02,
    "unit": "g"
    },
    {
    "name": "Zinc",
    "amount": 0.01,
    "unit": "mg"
    },
    {
    "name": "Cholesterol",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Vitamin B3",
    "amount": 0.01,
    "unit": "mg"
    },
    {
    "name": "Folic Acid",
    "amount": 0,
    "unit": "µg"
    },
    {
    "name": "Sugar",
    "amount": 0.03,
    "unit": "g"
    },
    {
    "name": "Vitamin C",
    "amount": 0.08,
    "unit": "mg"
    },
    {
    "name": "Folate",
    "amount": 0.08,
    "unit": "µg"
    },
    {
    "name": "Potassium",
    "amount": 2.21,
    "unit": "mg"
    },
    {
    "name": "Caffeine",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Vitamin B12",
    "amount": 0,
    "unit": "µg"
    },
    {
    "name": "Vitamin E",
    "amount": 0.01,
    "unit": "mg"
    },
    {
    "name": "Protein",
    "amount": 0.02,
    "unit": "g"
    },
    {
    "name": "Manganese",
    "amount": 0.05,
    "unit": "mg"
    },
    {
    "name": "Vitamin B1",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Vitamin K",
    "amount": 0.09,
    "unit": "µg"
    },
    {
    "name": "Calcium",
    "amount": 2.27,
    "unit": "mg"
    },
    {
    "name": "Vitamin B6",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Sodium",
    "amount": 0.17,
    "unit": "mg"
    },
    {
    "name": "Phosphorus",
    "amount": 0.39,
    "unit": "mg"
    },
    {
    "name": "Net Carbohydrates",
    "amount": 0.18,
    "unit": "g"
    },
    {
    "name": "Carbohydrates",
    "amount": 0.23,
    "unit": "g"
    },
    {
    "name": "Poly Unsaturated Fat",
    "amount": 0,
    "unit": "g"
    },
    {
    "name": "Fat",
    "amount": 0.04,
    "unit": "g"
    },
    {
    "name": "Vitamin A",
    "amount": 0.87,
    "unit": "IU"
    },
    {
    "name": "Iron",
    "amount": 0.07,
    "unit": "mg"
    },
    {
    "name": "Choline",
    "amount": 0.07,
    "unit": "mg"
    },
    {
    "name": "Magnesium",
    "amount": 0.45,
    "unit": "mg"
    },
    {
    "name": "Vitamin D",
    "amount": 0,
    "unit": "µg"
    }
    ]
    },
    {
    "name": "brown sugar",
    "amount": 0.67,
    "unit": "tablespoons",
    "nutrients": [
    {
    "name": "Alcohol",
    "amount": 0,
    "unit": "g"
    },
    {
    "name": "Vitamin B2",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Mono Unsaturated Fat",
    "amount": 0,
    "unit": "g"
    },
    {
    "name": "Copper",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Calories",
    "amount": 30.4,
    "unit": "cal"
    },
    {
    "name": "Fiber",
    "amount": 0,
    "unit": "g"
    },
    {
    "name": "Selenium",
    "amount": 0.1,
    "unit": "µg"
    },
    {
    "name": "Saturated Fat",
    "amount": 0,
    "unit": "g"
    },
    {
    "name": "Zinc",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Cholesterol",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Vitamin B3",
    "amount": 0.01,
    "unit": "mg"
    },
    {
    "name": "Folic Acid",
    "amount": 0,
    "unit": "µg"
    },
    {
    "name": "Sugar",
    "amount": 7.76,
    "unit": "g"
    },
    {
    "name": "Vitamin C",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Folate",
    "amount": 0.08,
    "unit": "µg"
    },
    {
    "name": "Potassium",
    "amount": 10.64,
    "unit": "mg"
    },
    {
    "name": "Caffeine",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Vitamin B12",
    "amount": 0,
    "unit": "µg"
    },
    {
    "name": "Vitamin E",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Protein",
    "amount": 0.01,
    "unit": "g"
    },
    {
    "name": "Manganese",
    "amount": 0.01,
    "unit": "mg"
    },
    {
    "name": "Vitamin B1",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Vitamin K",
    "amount": 0,
    "unit": "µg"
    },
    {
    "name": "Calcium",
    "amount": 6.64,
    "unit": "mg"
    },
    {
    "name": "Vitamin B6",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Sodium",
    "amount": 2.24,
    "unit": "mg"
    },
    {
    "name": "Phosphorus",
    "amount": 0.32,
    "unit": "mg"
    },
    {
    "name": "Net Carbohydrates",
    "amount": 7.85,
    "unit": "g"
    },
    {
    "name": "Carbohydrates",
    "amount": 7.85,
    "unit": "g"
    },
    {
    "name": "Poly Unsaturated Fat",
    "amount": 0,
    "unit": "g"
    },
    {
    "name": "Vitamin B5",
    "amount": 0.01,
    "unit": "mg"
    },
    {
    "name": "Fat",
    "amount": 0,
    "unit": "g"
    },
    {
    "name": "Vitamin A",
    "amount": 0,
    "unit": "IU"
    },
    {
    "name": "Iron",
    "amount": 0.06,
    "unit": "mg"
    },
    {
    "name": "Choline",
    "amount": 0.18,
    "unit": "mg"
    },
    {
    "name": "Magnesium",
    "amount": 0.72,
    "unit": "mg"
    },
    {
    "name": "Vitamin D",
    "amount": 0,
    "unit": "µg"
    }
    ]
    },
    {
    "name": "cornstarch",
    "amount": 0.5,
    "unit": "tablespoons",
    "nutrients": [
    {
    "name": "Alcohol",
    "amount": 0,
    "unit": "g"
    },
    {
    "name": "Vitamin B2",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Mono Unsaturated Fat",
    "amount": 0,
    "unit": "g"
    },
    {
    "name": "Copper",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Calories",
    "amount": 15.24,
    "unit": "cal"
    },
    {
    "name": "Fiber",
    "amount": 0.04,
    "unit": "g"
    },
    {
    "name": "Selenium",
    "amount": 0.11,
    "unit": "µg"
    },
    {
    "name": "Saturated Fat",
    "amount": 0,
    "unit": "g"
    },
    {
    "name": "Zinc",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Cholesterol",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Vitamin B3",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Folic Acid",
    "amount": 0,
    "unit": "µg"
    },
    {
    "name": "Sugar",
    "amount": 0,
    "unit": "g"
    },
    {
    "name": "Vitamin C",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Folate",
    "amount": 0,
    "unit": "µg"
    },
    {
    "name": "Potassium",
    "amount": 0.12,
    "unit": "mg"
    },
    {
    "name": "Caffeine",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Vitamin B12",
    "amount": 0,
    "unit": "µg"
    },
    {
    "name": "Vitamin E",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Protein",
    "amount": 0.01,
    "unit": "g"
    },
    {
    "name": "Manganese",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Vitamin B1",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Vitamin K",
    "amount": 0,
    "unit": "µg"
    },
    {
    "name": "Calcium",
    "amount": 0.08,
    "unit": "mg"
    },
    {
    "name": "Vitamin B6",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Sodium",
    "amount": 0.36,
    "unit": "mg"
    },
    {
    "name": "Phosphorus",
    "amount": 0.52,
    "unit": "mg"
    },
    {
    "name": "Net Carbohydrates",
    "amount": 3.61,
    "unit": "g"
    },
    {
    "name": "Carbohydrates",
    "amount": 3.65,
    "unit": "g"
    },
    {
    "name": "Poly Unsaturated Fat",
    "amount": 0,
    "unit": "g"
    },
    {
    "name": "Vitamin B5",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Fat",
    "amount": 0,
    "unit": "g"
    },
    {
    "name": "Vitamin A",
    "amount": 0,
    "unit": "IU"
    },
    {
    "name": "Iron",
    "amount": 0.02,
    "unit": "mg"
    },
    {
    "name": "Choline",
    "amount": 0.02,
    "unit": "mg"
    },
    {
    "name": "Magnesium",
    "amount": 0.12,
    "unit": "mg"
    },
    {
    "name": "Vitamin D",
    "amount": 0,
    "unit": "µg"
    }
    ]
    },
    {
    "name": "red delicious apples",
    "amount": 0.83,
    "unit": "cups",
    "nutrients": [
    {
    "name": "Alcohol",
    "amount": 0,
    "unit": "g"
    },
    {
    "name": "Vitamin B2",
    "amount": 0.03,
    "unit": "mg"
    },
    {
    "name": "Mono Unsaturated Fat",
    "amount": 0.01,
    "unit": "g"
    },
    {
    "name": "Copper",
    "amount": 0.03,
    "unit": "mg"
    },
    {
    "name": "Calories",
    "amount": 54.17,
    "unit": "cal"
    },
    {
    "name": "Fiber",
    "amount": 2.5,
    "unit": "g"
    },
    {
    "name": "Selenium",
    "amount": 0,
    "unit": "µg"
    },
    {
    "name": "Saturated Fat",
    "amount": 0.03,
    "unit": "g"
    },
    {
    "name": "Zinc",
    "amount": 0.04,
    "unit": "mg"
    },
    {
    "name": "Cholesterol",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Vitamin B3",
    "amount": 0.09,
    "unit": "mg"
    },
    {
    "name": "Folic Acid",
    "amount": 0,
    "unit": "µg"
    },
    {
    "name": "Sugar",
    "amount": 10.82,
    "unit": "g"
    },
    {
    "name": "Vitamin C",
    "amount": 4.79,
    "unit": "mg"
    },
    {
    "name": "Folate",
    "amount": 3.13,
    "unit": "µg"
    },
    {
    "name": "Potassium",
    "amount": 111.46,
    "unit": "mg"
    },
    {
    "name": "Caffeine",
    "amount": 0,
    "unit": "mg"
    },
    {
    "name": "Vitamin B12",
    "amount": 0,
    "unit": "µg"
    },
    {
    "name": "Vitamin E",
    "amount": 0.19,
    "unit": "mg"
    },
    {
    "name": "Protein",
    "amount": 0.27,
    "unit": "g"
    },
    {
    "name": "Manganese",
    "amount": 0.04,
    "unit": "mg"
    },
    {
    "name": "Vitamin B1",
    "amount": 0.02,
    "unit": "mg"
    },
    {
    "name": "Vitamin K",
    "amount": 2.29,
    "unit": "µg"
    },
    {
    "name": "Calcium",
    "amount": 6.25,
    "unit": "mg"
    },
    {
    "name": "Vitamin B6",
    "amount": 0.04,
    "unit": "mg"
    },
    {
    "name": "Sodium",
    "amount": 1.04,
    "unit": "mg"
    },
    {
    "name": "Phosphorus",
    "amount": 11.46,
    "unit": "mg"
    },
    {
    "name": "Net Carbohydrates",
    "amount": 11.89,
    "unit": "g"
    },
    {
    "name": "Carbohydrates",
    "amount": 14.39,
    "unit": "g"
    },
    {
    "name": "Poly Unsaturated Fat",
    "amount": 0.05,
    "unit": "g"
    },
    {
    "name": "Vitamin B5",
    "amount": 0.06,
    "unit": "mg"
    },
    {
    "name": "Fat",
    "amount": 0.18,
    "unit": "g"
    },
    {
    "name": "Vitamin A",
    "amount": 56.25,
    "unit": "IU"
    },
    {
    "name": "Iron",
    "amount": 0.13,
    "unit": "mg"
    },
    {
    "name": "Choline",
    "amount": 3.54,
    "unit": "mg"
    },
    {
    "name": "Magnesium",
    "amount": 5.21,
    "unit": "mg"
    },
    {
    "name": "Fluoride",
    "amount": 3.44,
    "unit": "mg"
    },
    {
    "name": "Vitamin D",
    "amount": 0,
    "unit": "µg"
    }
    ]
    }
    ],
    "caloricBreakdown": {
    "percentProtein": 1.15,
    "percentFat": 1.85,
    "percentCarbs": 97
    },
    "weightPerServing": {
    "amount": 117,
    "unit": "g"
    }
    },
    "summary": "Fried Apples might be just the side dish you are searching for. For <b>69 cents per serving</b>, this recipe <b>covers 2%</b> of your daily requirements of vitamins and minerals. Watching your figure? This gluten free and dairy free recipe has <b>139 calories</b>, <b>0g of protein</b>, and <b>0g of fat</b> per serving. 9263 people have made this recipe and would make it again. If you have cornstarch, apple pie spice, golden tasty apples, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around <b>30 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 30%</b>. This score is rather bad. Try <a href=\"https://spoonacular.com/recipes/fried-onions-and-apples-435642\">Fried Onions and Apples</a>, <a href=\"https://spoonacular.com/recipes/fake-fried-apples-615490\">Fake Fried Apples</a>, and <a href=\"https://spoonacular.com/recipes/southern-fried-apples-475940\">Southern Fried Apples</a> for similar recipes.",
    "cuisines": [],
    "dishTypes": [
    "side dish"
    ],
    "diets": [
    "gluten free",
    "dairy free"
    ],
    "occasions": [],
    "winePairing": {},
    "instructions": "Clean, core and slice applesAdd 2 cups apple juice to large skillet and add apples, stir to cover with juice the best you can. Stir often and simmer until apples are fork tender, about 15 minutes.Remove apples with a slotted spoon and place in bowl. Keep apple juice on low heat.In the blender, combine 1/2 cup apple juice, cornstarch, apple pie spice and brown sugar, blend until smoothSlowly whisk mixture into heated apple juice, whisking constantly, cook until thick and bubbly.Add apples back into mixture and heat throughServe warm or coldStore leftovers in fridge",
    "analyzedInstructions": [
    {
    "name": "",
    "steps": [
    {
    "number": 1,
    "step": "Clean, core and slice apples",
    "ingredients": [
    {
    "id": 9003,
    "name": "apple",
    "localizedName": "apple",
    "image": "apple.jpg"
    }
    ],
    "equipment": []
    },
    {
    "number": 2,
    "step": "Add 2 cups apple juice to large skillet and add apples, stir to cover with juice the best you can. Stir often and simmer until apples are fork tender, about 15 minutes.",
    "ingredients": [
    {
    "id": 9016,
    "name": "apple juice",
    "localizedName": "apple juice",
    "image": "apple-juice.jpg"
    },
    {
    "id": 9003,
    "name": "apple",
    "localizedName": "apple",
    "image": "apple.jpg"
    },
    {
    "id": 1019016,
    "name": "juice",
    "localizedName": "juice",
    "image": "apple-juice.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404645,
    "name": "frying pan",
    "localizedName": "frying pan",
    "image": "pan.png"
    }
    ],
    "length": {
    "number": 15,
    "unit": "minutes"
    }
    },
    {
    "number": 3,
    "step": "Remove apples with a slotted spoon and place in bowl. Keep apple juice on low heat.In the blender, combine 1/2 cup apple juice, cornstarch, apple pie spice and brown sugar, blend until smooth",
    "ingredients": [
    {
    "id": 1042035,
    "name": "apple pie spice",
    "localizedName": "apple pie spice",
    "image": "garam-masala.jpg"
    },
    {
    "id": 9016,
    "name": "apple juice",
    "localizedName": "apple juice",
    "image": "apple-juice.jpg"
    },
    {
    "id": 19334,
    "name": "brown sugar",
    "localizedName": "brown sugar",
    "image": "dark-brown-sugar.png"
    },
    {
    "id": 20027,
    "name": "corn starch",
    "localizedName": "corn starch",
    "image": "white-powder.jpg"
    },
    {
    "id": 9003,
    "name": "apple",
    "localizedName": "apple",
    "image": "apple.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404636,
    "name": "slotted spoon",
    "localizedName": "slotted spoon",
    "image": "slotted-spoon.jpg"
    },
    {
    "id": 404726,
    "name": "blender",
    "localizedName": "blender",
    "image": "blender.png"
    },
    {
    "id": 404783,
    "name": "bowl",
    "localizedName": "bowl",
    "image": "bowl.jpg"
    }
    ]
    },
    {
    "number": 4,
    "step": "Slowly whisk mixture into heated apple juice, whisking constantly, cook until thick and bubbly.",
    "ingredients": [
    {
    "id": 9016,
    "name": "apple juice",
    "localizedName": "apple juice",
    "image": "apple-juice.jpg"
    }
    ],
    "equipment": [
    {
    "id": 404661,
    "name": "whisk",
    "localizedName": "whisk",
    "image": "whisk.png"
    }
    ]
    },
    {
    "number": 5,
    "step": "Add apples back into mixture and heat through",
    "ingredients": [
    {
    "id": 9003,
    "name": "apple",
    "localizedName": "apple",
    "image": "apple.jpg"
    }
    ],
    "equipment": []
    },
    {
    "number": 6,
    "step": "Serve warm or cold",
    "ingredients": [],
    "equipment": []
    },
    {
    "number": 7,
    "step": "Store leftovers in fridge",
    "ingredients": [],
    "equipment": []
    }
    ]
    }
    ],
    "originalId": null
  }
]

module.exports = recipesByIngredent
