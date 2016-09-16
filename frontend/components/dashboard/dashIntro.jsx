var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div id="dashIntro" className="flex column center">
        <h3 id="dashTitle">Howdy!</h3>
        <br/><br/>
        <p>
        Welcome to your <strong>Project Dashboard</strong>! Here you can
        view, edit, or delete projects by selecting the corresponding one above,
        or add a new project by selecting the plus icon in the upper righthand
        corner. If you have any questions or run into any issues, feel free to
        contact <a href="mailto:arjundutta91@gmail.com">me</a>. I hope you are
        having a nice day!!!
        </p>
      </div>
    )
  }
})
