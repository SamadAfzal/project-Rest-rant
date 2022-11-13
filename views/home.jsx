const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                  <img src="/Users/samad/Rest-rant/public/images/goodeats-yqr-DRZHzm-uAaM-unsplash.jpg" alt="Ramen" />
                </div>
                Photo by <a href="https://unsplash.com/@goodeats_yqr?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">GoodEats YQR</a> on <a href="https://unsplash.com/s/photos/free-ramen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
                
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home

