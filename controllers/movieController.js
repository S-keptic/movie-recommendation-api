import fs from 'fs';
import csv from 'csv-parser';

const movieR = async (req,res) => {
  try {
    const results = [];

    fs.createReadStream('data.csv')
      .pipe(csv())
      .on('data', (data) => {
        results.push(data);
      })
      .on('end', () => {
        console.log('CSV file successfully processed.');

        const randomMovieIndex = Math.floor(Math.random() * results.length);
        const randomMovie = results[randomMovieIndex];
        console.log(randomMovie);
        res.json(randomMovie)
      });
  } catch (err) {
    console.error(err);
  }
};

// Call the movieR function to process the CSV and log a random movie
export default movieR
