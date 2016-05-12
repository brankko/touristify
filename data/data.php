<?php
// Example of MySQLi and Prepared Statements
// save this file as example.php
// access it with example.php?userid=13 for example
 
// Databse constants
define("DB_SERVER", "localhost");
define("DB_USER", "root");
define("DB_PASS", "root");
define("DB_NAME", "touristify");
 
// New DB connection
$mysqli = new mysqli(DB_SERVER, DB_USER, DB_PASS, DB_NAME);
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
}
 
// Prepared query with ? as placeholder for parameters
$query = "SELECT id, givenname AS name, surname, gender, city, country AS country_abbr, countryfull AS country_full, age, latitude AS lat, longitude AS lon FROM fakenames LIMIT 900;";
 

// Get instance of statement
$statement = $mysqli->stmt_init();

$people = [];
// Prepare Query
if ($statement->prepare($query)) {
 
    // Execute the query
    $statement->execute();
 
    // Bind result variables
    $statement->bind_result($id, $name, $surname, $gender, $city, $country_abbr, $country_full, $age, $lat, $lon);
 
    // Fetch Value
    while ($statement->fetch()) {
        $person = [
            'id' => $id,
            'name' => $name,
            'surname' => $surname,
            'gender' => $gender,
            'city' => $city,
            'country_abbr' => $country_abbr,
            'country_full' => $country_full,
            'age' => $age,
            'lat' => $lat,
            'lon' => $lon
        ];
        $people[] = $person;
    }

    // Close statement
    $statement->close();
}
 
// Close connection
$mysqli->close();

echo json_encode($people);