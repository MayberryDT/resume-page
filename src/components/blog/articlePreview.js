import React, {Component} from 'react';

import classes from '../../App.css';

class ArticlePreview extends Component {
    render() {
        if (this.props.post) {
          return (
            <div>
              <a href={"/blog/" + this.props.post.ID}>
                {this.props.post.featured_image ? (
                  <img
                    alt="article header"
                    src={this.props.post.featured_image}
                  />
                ) : (
                  ""
                )}
                <h3>{this.props.post.title}</h3>
              </a>
            </div>
          );
        } else {
          return null;
        }
    }
}

export default ArticlePreview;