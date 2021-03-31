import React from "react";
import { Paper } from "@material-ui/core";
import parse from "html-react-parser";
import Grid from "@material-ui/core/Grid";
import "./DrillView.css";

/*
Component to display one drill. The drill contain the title, the picture and the description in the selected language.
To implement : skills + duration (Start date - End Date with time)
*/
class DrillView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlDrill: props.urlPractice,
      lang: props.lang,
      drill: null,
    };
  }

  componentDidMount() {
    this.fetchDrill(this.state.urlDrill);
  }

  fetchDrill(urlDrill) {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(urlDrill, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetching data =" + data.drill);
        this.setState({ drill: data.drill });
      });
  }

  render() {
    if (this.state.drill == null) {
      return "<BR> Error, no drill found (DrillView)";
    }

    let drill_data = this.state.drill[0];

    return (
      <>
        <Paper variant="outlined" className="drillBox">
          <Grid container spacing={1}>
            <Grid item xs>
                <img src={`data:image/jpeg;base64,${drill_data.drill_picture_64}`} alt="Unable to load drill"/>
            </Grid>
            <Grid item xs>
              <Grid item xs container spacing={1} direction="column">
                <Grid item xs={12} className="rowTitre">
                  {drill_data.drill_name_fr} (durée)
                </Grid>
                <Grid item xs={12}>
                  {parse(drill_data.drill_description_fr)}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className="rowSkill">
              Habilités : {drill_data.drill_skills}
            </Grid>
          </Grid>
        </Paper>
      </>
    );
  }
}

export default DrillView;
/*
"drill_id": 8,
            "drill_name_fr": "Exercice 8",
            "drill_name_eng": "Exercise 9",
            "drill_description_fr": "Allez",
            "drill_descrription_eng": "Go",
            "drill_note": "Faire",
            "drill_picture": null,
            "drill_skills": "Patin"



       <Table>          
                <Tr>
                    <Td width="50%" >
                        <img src={`data:image/jpeg;base64,${drill_data.drill_picture_64}`} alt='No Image' />       
                    </Td>         
                    <Td width="50%" className="cellTitre">
                        <Table className="tableDrillInfo">   
                            <Tr className="cellTitre" rowspan="1" height="10%" ><Td >{drill_data.drill_name_fr}  (durée)  </Td></Tr>   
                            <Tr rowspan="4" height="80%"><Td>{parse(drill_data.drill_description_fr)}</Td></Tr>   
                            <Tr className="rowSkill" rowspan="1" height="10%"><Td>Skills</Td></Tr>   
                        </Table>                                          
                    </Td>             
                </Tr>
            </Table>


*/
