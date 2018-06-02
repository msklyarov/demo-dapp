import React, { Fragment } from 'react'
import NavBar from './navbar'
import FacetBlock from './facet-block'

const Layout = ({ children }) => {
  // display footer
  if (document.getElementById('jolyy-footer')) {
    document.getElementById('jolyy-footer').className = ''
  }

  return (
    <Fragment>
      <main className="d-flex flex-column">
        <NavBar />
        <section className="container">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap"
            }}
          >
            <div className="facet-block" style={{ verticalAlign: 'top' }}>
              {window.location.href.endsWith('/#/') && <FacetBlock />}
            </div>
            <div id="shop-items">
              {children}
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  )
}

export default Layout
