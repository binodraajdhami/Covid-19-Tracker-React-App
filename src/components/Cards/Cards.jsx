import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import CN from 'classnames'

import styles from './Cards.module.css'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return (
            <>
                <div className={styles.loaderSection}>
                    <div className={styles.loader}></div>
                </div>
            </>
        )
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={CN(styles.card, styles.infected)}>
                    <CardContent className={CN(styles.cardBlock, styles.infectedBlock)}>
                        <Typography color="textSecondary" gutterBottom className={styles.cardTitle}>Infected</Typography>
                        <Typography varaint="h4" className={styles.cardNumber}>
                            <CountUp start={0} end={confirmed.value} duration={3} separator="," />
                        </Typography>
                        <Typography color="textSecondary" className={styles.cardDate}>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2" className={styles.cardInfo}>Number of Active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={CN(styles.card, styles.recovered)}>
                    <CardContent className={CN(styles.cardBlock, styles.recoveredBlock)}>
                        <Typography color="textSecondary" gutterBottom className={styles.cardTitle}>Recoverd</Typography>
                        <Typography varaint="h4" className={styles.cardNumber}>
                            <CountUp start={0} end={recovered.value} duration={3} separator="," />
                        </Typography>
                        <Typography color="textSecondary" className={styles.cardDate}>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2" className={styles.cardInfo}>Number of recoverd from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={CN(styles.card, styles.deaths)}>
                    <CardContent className={CN(styles.cardBlock, styles.deathsBlock)}>
                        <Typography color="textSecondary" gutterBottom className={styles.cardTitle}>Deaths</Typography>
                        <Typography varaint="h4" className={styles.cardNumber}>
                            <CountUp start={0} end={deaths.value} duration={3} separator="," />
                        </Typography>
                        <Typography color="textSecondary" className={styles.cardDate}>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2" className={styles.cardInfo}>Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}
export default Cards;