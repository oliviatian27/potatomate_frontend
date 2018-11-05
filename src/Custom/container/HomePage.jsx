import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from 'components/CustomButtons/Button.jsx';

import Custom_Pop_Movie from 'Custom/components/homePageComponents/Custom_Pop_Movie'
import { Link } from 'react-router-dom'
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";



import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.jsx";
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.jsx";

import { connect } from 'react-redux';
import {fetchMovie}  from  'actions/action';


class PresentationPage extends React.Component {
  componentDidMount() {
    this.props.fetchMovie("movie",'','pop','popularity.desc',1)
    this.props.fetchMovie("movie",'&with_genres=28','action','popularity.desc',1)
    this.props.fetchMovie("movie",'&with_genres=80','crime','popularity.desc',1)
    this.props.fetchMovie("movie",'&with_genres=35','comedy','popularity.desc',1)
    this.props.fetchMovie("movie",'&with_genres=10749','romance','popularity.desc',1)
    this.props.fetchMovie("movie",'&with_genres=878','scifi','popularity.desc',1)
    this.props.fetchMovie("movie",'&with_genres=18','drama','popularity.desc',1)
    this.props.fetchMovie("tv",'','pop','popularity.desc',1)
    this.props.fetchMovie("tv",'&with_genres=10751','family','popularity.desc',1)
    this.props.fetchMovie("tv",'&with_genres=10765','scifi','popularity.desc',1)
    this.props.fetchMovie("tv",'&with_genres=35','comedy','popularity.desc',1)
    this.props.fetchMovie("tv",'&with_genres=18','drama','popularity.desc',1)
    this.props.fetchMovie("tv",'&with_genres=80','crime','popularity.desc',1)
    this.props.fetchMovie("tv",'&with_genres=16','animation','popularity.desc',1)

  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Custom_Pop_Movie />


      </div>
    );
  }
}

export default connect(null,{fetchMovie})(withStyles(styles)(PresentationPage));
