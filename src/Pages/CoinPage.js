import { LinearProgress, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../config/api";
import { numberWithCommas } from "../components/CoinsTable";
import CryptoContext, { CryptoState } from "../CryptoContext";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    console.log(data);
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      padding: 35,
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },
    heading: {
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Roboto",
      textAlign: "center",
      color: "lightblue",
    },
    description: {
      width: "100%",
      fontFamily: "Roboto",
      padding: 25,
      paddingBottom: 15,
      paddingTop: 0,
      textAlign: "justify",
    },
    marketData: {
      alignSelf: "start",
      padding: 25,
      paddingTop: 10,
      width: "100%",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "space-around",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
      },
      [theme.breakpoints.down("xs")]: {
        alignItems: "start",
      },
    },
  }));

  const classes = useStyles();

  if (!coin) return <LinearProgress style={{ backgroundColor: "lightblue" }} />;

  return (
    <div className={classes.container}>
      <img
        src={coin?.image.large}
        alt={coin?.name}
        height="200"
        style={{ marginBottom: 20 }}
      />
      <Typography variant="h3" className={classes.heading}>
        {coin?.name}
      </Typography>
      <Typography variant="subtitle1" className={classes.description}>
        {coin?.description.en.split(". ")[0]}.
      </Typography>
      <div className={classes.marketData}>
        <span style={{ display: "flex" }}>
          <Typography variant="h5" className={classes.heading}>
            Rank:
          </Typography>
          &nbsp; &nbsp;
          <Typography
            variant="h5"
            style={{
              fontFamily: "Roboto",
            }}>
            {numberWithCommas(coin?.market_cap_rank)}
          </Typography>
        </span>

        <span style={{ display: "flex" }}>
          <Typography variant="h5" className={classes.heading}>
            Current Price:
          </Typography>
          &nbsp; &nbsp;
          <Typography
            variant="h5"
            style={{
              fontFamily: "Roboto",
            }}>
            {symbol}{" "}
            {numberWithCommas(
              coin?.market_data.current_price[currency.toLowerCase()]
            )}
          </Typography>
        </span>
        <span style={{ display: "flex" }}>
          <Typography variant="h5" className={classes.heading}>
            Market Cap:
          </Typography>
          &nbsp; &nbsp;
          <Typography
            variant="h5"
            style={{
              fontFamily: "Roboto",
            }}>
            {symbol}{" "}
            {numberWithCommas(
              coin?.market_data.market_cap[currency.toLowerCase()]
                .toString()
                .slice(0, -6)
            )}
            M
          </Typography>
        </span>
      </div>
      <div className={classes.marketData}>
        <span style={{ display: "flex" }}>
          <Typography variant="h5" className={classes.heading}>
            Created:
          </Typography>
          &nbsp; &nbsp;
          <Typography
            variant="h5"
            style={{
              fontFamily: "Roboto",
            }}>
            {coin?.genesis_date}
          </Typography>
        </span>

        <span style={{ display: "flex" }}>
          <Typography variant="h5" className={classes.heading}>
            All Time High:
          </Typography>
          &nbsp; &nbsp;
          <Typography
            variant="h5"
            style={{
              fontFamily: "Roboto",
            }}>
            {symbol}{" "}
            {numberWithCommas(coin?.market_data.ath[currency.toLowerCase()])}
          </Typography>
        </span>
        <span style={{ display: "flex" }}>
          <Typography variant="h5" className={classes.heading}>
            Max Supply:
          </Typography>
          &nbsp; &nbsp;
          <Typography
            variant="h5"
            style={{
              fontFamily: "Roboto",
            }}>
            {coin?.market_data.max_supply ?? "N/A"} {coin.symbol.toUpperCase()}
          </Typography>
        </span>
      </div>
    </div>
  );
};

export default CoinPage;
