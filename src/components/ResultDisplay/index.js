import React from "react";
import Typography from "@material-ui/core/Typography";
import withColor from "../../HOC/withColor";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import "./index.css";

function luminance(r, g, b) {
  var a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

const calculateRatio = (backColor, frontColor) => {
  const color1luminance = luminance(backColor.r, backColor.g, backColor.b);
  const color2luminance = luminance(frontColor.r, frontColor.g, frontColor.b);
  return color1luminance > color2luminance
    ? (color2luminance + 0.05) / (color1luminance + 0.05)
    : (color1luminance + 0.05) / (color2luminance + 0.05);
};

const useStyles = makeStyles({
  root: {},
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    color: "#fff",
  },
  result: {
    color: "#fff",
  },
  pos: {
    marginBottom: 12,
  },
});

const SingleResult = React.memo(({ result, title }) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      //   variant='outlined'
      style={{ backgroundColor: result ? "#3EC300" : "#ac1c1c" }}
    >
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          {title}
        </Typography>
        <Typography className={classes.result} variant='h5' component='h2'>
          {result ? "Pass" : "Fail"}
        </Typography>
      </CardContent>
    </Card>
  );
});

const ResultDisplay = ({ colors }) => {
  const ratio = calculateRatio(colors.backColor, colors.frontColor);

  return (
    <section style={{ display: "grid", placeItems: "center" }}>
      <Typography
        variant='h4'
        component='h2'
        align='center'
        style={{
          fontWeight: 700,
        }}
        gutterBottom
      >
        Test Results
      </Typography>
      <div className='result'>
        <div className='result-grp'>
          <SingleResult title='AA-level large text' result={ratio < 1 / 3} />
          <SingleResult title='AA-level small text' result={ratio < 1 / 4.5} />
        </div>
        <div className='result-grp'>
          <SingleResult title='AAA-level large text' result={ratio < 1 / 4.5} />
          <SingleResult title='AAA-level small text' result={ratio < 1 / 7} />
        </div>
      </div>
    </section>
  );
};

export default withColor(ResultDisplay);
