import React from 'react'
import './brand.css'

import { atlassian, dropbox, google, shopify, slack } from '../../assets/import'

const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
            <div>
                <img loading='lazy' src={google} alt="google" />
            </div>
            <div>
                <img loading='lazy' src={slack} alt="slack" />
            </div>
            <div>
                <img loading='lazy' src={atlassian} alt="atlassian" />
            </div>
            <div>
                <img loading='lazy' src={dropbox} alt="dropbox" />
            </div>
            <div>
                <img loading='lazy' src={shopify} alt="shopify" />
            </div>
        </div>
    )
}

export default Brand