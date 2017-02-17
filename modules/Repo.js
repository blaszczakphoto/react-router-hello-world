// modules/Repo.js
import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Display single repo</h2>
        <h4>{this.props.params.repoName}</h4>
      </div>
    )
  }
})