import 'dotenv/config';
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = process.env.URL

app.use(bodyParser.urlencoded({extended : true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
    const response = await axios.get(`${API_URL}`);
    const result = response.data.teams[0];
    const teamData = {
        logo : result.strTeamLogo
    }
    console.log(teamData.logo);
    res.render("index.ejs", { team : teamData });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});