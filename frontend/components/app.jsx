var React = require('react');

var Header = require('./header/header');
var SubHeader = require('./header/subHeader');
var AboutMe = require('./tabs/aboutMe');
var Projects = require('./tabs/projects');
var Contact = require ('./tabs/contact');
var ProjectForm = require('./projects/projectForm');

var Modal = require('boron/DropModal');
var ModalUtil = require('../utils/modalUtil');
var ModalStore = require('../stores/modalStore');

var ModalStyle = require('../assets/modalStyle');
var ContentStyle = require('../assets/contentStyle');

var App = React.createClass({

  showModal: function(){
    this.refs.modal.show();
  },
  hideModal: function(){
    this.refs.modal.hide();
  },

  componentDidMount: function() {
    $(document).scrollTop(0);
    startSecretCodeListener();
    this.modalListener = ModalStore.addListener(this.update);
  },

  componentWillUnmount: function() {
    this.modalListener.remove();
  },

  update: function() {
    if (ModalStore.projectForm()) {
      this.showModal();
    }
  },

  submitForm: function() {
    console.log("asjdlfk");
  },

  render: function() {
    return (
      <div>
        <div id="app" className="">
          <Header />
          <div id="aboutMeSeparator" className="separator" />
          <AboutMe />
          <div id="projectsSeparator" className="separator" />
          <Projects />
          <div id="contactSeparator" className="separator" />
          <Contact />
        </div>
        <Modal ref="modal"
               modalStyle={ModalStyle}
               contentStyle={ContentStyle}>
            <ProjectForm />
        </Modal>
      </div>
    )
  }
});


var startSecretCodeListener = function () {
  var keyMap = {
    69: false,
    77: false,
    73: false,
    76: false,
    89: false
  };
  $(document).keydown(function(e) {
    if (e.keyCode in keyMap) {
      keyMap[e.keyCode] = true;
      if (allTrue(keyMap)) {
        ModalUtil.toggleProjectModal();
        resetKeyMap(keyMap);
      }
    }
  }).keyup(function(e) {
    if (e.keyCode in keyMap) {
      keyMap[e.keyCode] = false;
    }
  });
};

var allTrue = function(obj) {
  var result = true;
  Object.keys(obj).forEach(function(key) {
    if (!obj[key]) { result = false }
  });
  return result;
};

var resetKeyMap = function(obj) {
  Object.keys(obj).forEach(function(key) {
    obj[key] = false;
  });
};

module.exports = App;
