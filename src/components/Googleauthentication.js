import React from "react";
import { signin, signout } from "../actions";
import { connect } from "react-redux";

class Googleauthentication extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "810233580744-sklkou9r5csan6ilcav18t43n4oc70s3.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIN) => {
    if (isSignedIN) {
      this.props.signin(this.auth.currentUser.get().getId());
    } else {
      this.props.signout();
    }
  }

  onSignInClick = () => {
    return this.auth.signIn();
  }

  onsignoutclick = () => {
    return this.auth.signOut();
  }

  renderButtons() {
    if (this.props.authenticateprop) {
      return (
        <button onClick={this.onsignoutclick} className="ui red google button">
          <i className="google icon" /> Signout
        </button>
      );
    }else {
      return (
        <button onClick={this.onSignInClick} className="ui teal google button">
          <i className="google icon" /> Signin
        </button>
      );
    }
  }

  render() {
    return <div>
      { this.renderButtons()}
    </div>;
  }
}

const mapStatetoProps = (state) => {
  return { authenticateprop: state.GoogleAuthentication.isSignedIn };
};

export default connect(mapStatetoProps, { signin, signout })(
  Googleauthentication
);

