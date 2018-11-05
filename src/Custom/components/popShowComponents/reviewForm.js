import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { Rating } from 'material-ui-rating'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import contactsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.jsx";
import {connect} from 'react-redux'
import {submitReview}  from  'actions/action';
import Rater from 'react-rater'

class Custom_Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content:'',
      rating:3
    };
  }
  handleChange=(e)=>{
    this.setState({content:e.target.value})
  }
  handleRate=(e)=>{
    this.setState({rating:e})
  }

  handleSubmit=(e)=>{
    // e.preventDefault()
    const title=this.props.currentItem.name?this.props.currentItem.name:this.props.currentItem.title
    const obj={content:this.state.content,rating:2*this.state.rating,
      name:title,
      user_id:2,tmdbid:this.props.currentItem.id,
      rating_count:this.props.currentItem.vote_count,
      rating_average:this.props.currentItem.vote_average
    }
    this.props.submitReview(obj)
    this.setState({content:'',rating:''})
  }

  render() {
    const { classes,currentItem,...rest } = this.props;
    return (
      <div className="cd-section" {...rest}>
        {/* Contact us 1 START */}

          <div className={classes.container} style={{marginTop:"10px"}}>
            <GridContainer >
              <GridItem xs={12} sm={1} md={1}>
              </GridItem>

              <GridItem xs={12} sm={10} md={10}>
                <Card className={classes.card1}>
                  <form >

                    <CardHeader
                      contact
                      className={`${classes.textCenter} review`}
                    >
                        <h4 className={classes.cardTitle}>Review This!</h4>
                    </CardHeader>
                    <CardBody>
                      <MuiThemeProvider>
                      <Rating
                            value={this.state.rating}
                            max={5}
                            onChange={this.handleRate}

                          />
                      </MuiThemeProvider>
                      <CustomInput
                        labelText="Your Review"
                        id="message"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 4,
                          value:this.state.content,
                          onChange:this.handleChange
                        }}
                      />
                    </CardBody>
                    <div style={{textAlign:"center"}}>

                      <Button color="info"  onClick={this.handleSubmit} className="reviewbutton" >
                        Submit Review !
                      </Button>
                    </div>
                  </form>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={1} md={1}>
              </GridItem>
            </GridContainer>

        </div>
        {/* Contact us 1 END */}

      </div>
    );
  }
}

export default connect(null,{submitReview})(withStyles(contactsStyle)(Custom_Review));
