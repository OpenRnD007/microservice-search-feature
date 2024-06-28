# MicroService Series - Search Feature
## [Part of Microsevices Architecture](https://github.com/OpenRnD007/microservices/)

## Introduction
This project is a TypeScript-based application that integrates with Elasticsearch to provide search and autocomplete functionalities. It uses the Elasticsearch client for Node.js and is designed to work with Express.js as part of a larger backend service.

## Prerequisites
Before you begin, ensure you have met the following requirements:
* You have installed Node.js and npm.
* You have installed TypeScript.
* You have an Elasticsearch instance running and accessible.

## Installation
To install the project, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/OpenRnD007/microservice-search-feature.git
```

2. Navigate to the project directory:
```bash
cd microservice-search-feature
```

3. Install the dependencies:
```bash
npm install
```

## Usage
To use the search and autocomplete services in the project, you need to set up the following environment variables:
* `ELAST_INDEX` - The name of the Elasticsearch index.
* `ELAST_RESULT` - The default number of results to return.
* `ELAST_AUTO_COMPLETE_KEY` - The field key used for autocomplete.
* `ELAST_AUTO_COMPLETE_RESULT` - The fields to return for autocomplete results, separated by commas.

Here's how you can start the application:
```bash
npm start
```

The application exposes two main functionalities:
* [**Search**]: Retrieves data based on search parameters.
* [**Autocomplete**]: Provides suggestions based on partial search terms.

## Contributing
Contributions to this project are welcome. To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License
This project is licensed under the [MIT License](LICENSE).

## TODO
- Tests
