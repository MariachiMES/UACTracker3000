![GitHub license](https://img.shields.io/badge/license--blue.svg)


<img width="1556" alt="Screen Shot 2021-10-30 at 2 12 14 PM" src="https://user-images.githubusercontent.com/87109541/139555754-ccffc2a1-d479-435c-b7c9-f9b00d8fe765.png">

<img width="1626" alt="Screen Shot 2021-10-30 at 2 13 28 PM" src="https://user-images.githubusercontent.com/87109541/139555773-31127bad-2fd9-46c5-a004-1c398f240e6c.png">


# UAC Tracker 3000

# Description

As an emergency influx shelter team lead, I want to be able to track and manage data pertaining to unaccompanied minors and their sponsors, manage user access, leverage 3rd party APIs, and auto-generation functionality to streamline workflow.

- when I register as a new user, I Gain access to a data tracker with both a case manager and team lead view.  I will be able to manage my caseload, and edit data and view objects using sequelize. 
- As a case manager i would like to be able to automate certain tasks using third party apis such as address verification, and release request auto generation using the data I provide.  
- As a case manager, i would like to have a clear view of my caseload which shows me all the data i've entered as well as pertinent dates that information was entered.  
- As a team lead i want to have an overview of the case manager activity and status on all tasks also availble on the case manager view.  - Utilizes Google Maps, Google Earth, Smarty Street APIs.
- Utilizes Bulma.io CSS Framework
- Utilizes node packages: express, sessions, dotenv, bcrypt, handlebars, mysql2, sequelize

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [Tests](#tests)

- [Contributions](#contributions)

- [Features](#features)

- [Questions](#questions)

## Installation

none

## Usage

used for UAC emergency influx Case Management

## Credits

David Ortiz, Ben Townsend, Francisco Almaraz

## Tests



## Contributions

email david ortiz @davdjortizmusic@gmail.com

## Features

google earth, google maps, smarty streets

## Questions

[GitHub](https://github.com/mariachiMES)

Additional questions: [E-Mail](mailto:davidjortizmusic@gmail.com)

# DEV NOTES

## User Story

-As an emergency influx shelter team lead, I want to be able to track and manage data pertaining to unaccompanied minors and their sponsors, manage user access, leverage 3rd party APIs, and auto-generation functionality to streamline workflow.

## Brief List of MVP Functionality (What information can the user get/see?  What actions can the user do?)

-add unaccompanied minors to database through the front end and save to a database.
-access and edit UAC data from the front end.  
-use googlemaps, google earth and smarty street APIs to one-click generate street view, earth view, and smarty streets verification.  
-use a team lead view to track data for all case managers and their caseloads.

## API Routes (list of general API and homepage routes you expect)

-GET routes for CaseManagers
-GET routes for UACs
-GET route for Sponsor
-POST route for UACs & Case Managers & Sponsors
-DELETE route for UACs & Case Managers & Sponsors

## 3rd Party API/SDK/library ideas

-Google maps
-Google Earth
-Smarty Streets
-Bulma

## objects

Case Manager {
Username: allow null false
Password: allow null false
Role: string allow null false
Name: string allow null false
Caseload: auto increment
}
UAC:
First name: string allow null false,
Last name: string allow null false,
A#: Int (9) allow null false,
Gender: string allow null false,
COO: string,
Date Admitted: date,
Category: string,
DOB: date,
FRP: date,
ARI: date,
Trail of BCs: date,
UAC BC: date,
Sponsor BGC: date,
Sponsor FP: date,
Sponsor Cleared: date,
HHM1 ID Type:
HHM1 BGC: date,
HHM1 FP: date,
HHM1 Cleared: date,
SIR: int,
SIR Narrative: string
Caretaker Relationship: string,
Caretaker Corroboration: boolean,
POA type: string,
POA date: date,
Sponsor:
Case Manager

Sponsor:{
name: string,
Gender: string allow,
ID type: String,
ID date: date,
Address 1: string,
Address 2: string,
City: string;
State : String,
Prior Address: bolean,
pronoun: str
pronoun possessive: str,
