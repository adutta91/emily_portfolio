var React = require('react');

var Description = React.createClass({
  render: function() {
    return (
      <p className="description">
        I am an amazing person who is modest, lovely, thoughtful, kind, empathetic,
        funny, incredible, and all other manners of positive adjectives. I have
        a boyfriend who loves me so incredibly much, and who thinks of me all the
        time.
        <br /> <br />
        Other description stuff here. I just want to get a sense of the space.
        You could talk about your education and background and what you're interested
        in. You could also talk about your current position and the kind of stuff you
        do. You could talk about your skills, interests, passions, etc.
        <br /> <br />
        Now is some concluding info. Perhaps talk more generally about you, what
        you're looking to do now, in broad strokes. Maybe talk directly to the reader,
        thank them for coming, or wish them a wonderful day. We can maybe even scan
        your signature and paste it here.
      </p>
    )
  }
});

module.exports = Description;
