import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

import { Typography, colors } from "@mui/material";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  background: colors.blue[50],
}));

const pages = ["About", "Contact"];

function Footer() {
  return (
    <Box
      padding={'1%'}
      sx={{
        flexGrow: 1,
        margin: "4% auto 2% auto",
        // border: "1px solid",
        background: colors.blue[50],
        borderRadius: 2,
      }}
    >
      <Grid container>
        <Grid xs={12} md={4}>
          <Item elevation={0}>
            <Typography
              color={colors.blue[900]}
              sx={{
                fontFamily: "Poppins",
                fontSize: "1.8rem",
                fontWeight: "600",
              }}
            >
              CESS-IOE, <br /> Purwanchal Campus
            </Typography>
          </Item>
        </Grid>

        <Grid xs={12} md={4}>
          <Item
            elevation={0}
            sx={{
              flexGrow: 1,
              alignItems: "center",
              //   border: "1px solid",
              marginTop: "5%",
              justifyContent: "center",
              fontFamily: "Poppins",
            }}
          >
            {pages.map((page) => (
              <Link
                key={page}
                to={`/${page === "Home" ? "" : page.toLocaleLowerCase()}`}
                variant="h7"
                component={RouterLink}
                sx={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                  margin: "auto 3% auto 1%",
                  fontWeight: 400,
                }}
                fontFamily={"Poppins"}
              >
                {page}
              </Link>
            ))}
            <br style={{ marginTop: "5%" }} /> copyright©2004
          </Item>
        </Grid>

        <Grid xs={12} md={4}>
          <Item
            elevation={0}
            sx={{
              flexGrow: 1,
              alignItems: "center",
              //   border: "1px solid",
              marginTop: "5%",
              justifyContent: "center",
              fontFamily: "Poppins",
            }}
          >
            Facbook Twitter Insta
          </Item>
        </Grid>
      </Grid>

      <Grid xs={12} md={12}>
        <Item elevation={0}sx={{fontFamily:"Poppins"}}>
          Powered by
          <a
          target="_blanck"
          href="https://www.linkedin.com/in/mahesh-bogati-540066262/"
          style={{textDecoration:"none", color:colors.blue[900]}}
          >{' '}Mahesh Bogati 076BEI</a>
        </Item>
      </Grid>
    </Box>
  );
}

export default Footer;
