import { graphql } from 'gatsby'
import React from 'react'
import Clinic from '../components/Clinic/Clinic';
import Connect from '../components/Connect/Connect';
import TrackHealth from '../components/TrackHealth/TrackHealth';
import HeroBanner from './../components/HeroBanner/HeroBanner';
import Protect from './../components/Protect/Protect';
import '../styles/global.css'

const Home = ({ data: { wpPage } }) => {
    const blocks = wpPage.blocks

    const heroBanner = blocks.find(block => Object.keys(block)[0] === 'heroBanner')
    const connect = blocks.find(block => Object.keys(block)[0] === 'connect')
    const protect = blocks.find(block => Object.keys(block)[0] === 'protect')
    const clinics = blocks.find(block => Object.keys(block)[0] === 'clinics')
    const trackHealth = blocks.find(block => Object.keys(block)[0] === 'trackHealth')
    return (
        <div>
            <HeroBanner data={heroBanner.heroBanner} />
            <Connect data={connect.connect} />
            <Protect data={protect.protect} />
            <Clinic data={clinics.clinics} />
            <TrackHealth data={trackHealth.trackHealth} />
        </div>
    )
}

export default Home

export const query = graphql`
    query MyQuery {
    wpPage {
        blocks {
        ... on WpAcfHeroBannerBlock {
            heroBanner {
            buttonText
            description
            slogan
            title
            image {
                sourceUrl
            }
            }
            order
        }
        ... on WpAcfConnectBlock {
            connect {
            card {
                description
                number
                title
            }
            title
            description
            tableDetail {
                column1
                column2
                column3
            }
            sites {
                name
                location
                image {
                sourceUrl
                }
            }
            tableDetailTitle
            }
            order
        }
        ... on WpAcfTrackHealthBlock {
            trackHealth {
            title
            description
            content {
                imageDescription
                image {
                sourceUrl
                }
            }
            }
            order
        }
        ... on WpAcfProtectBlock {
            protect {
            title
            content {
                description
                subTitle
                image {
                sourceUrl
                }
            }
            }
            order
        }
        ... on WpAcfClinicBlock {
            clinics {
            title
            content {
                description
                image {
                sourceUrl
                }
                subTitle
            }
            }
            order
        }
        }
    }
    }

`