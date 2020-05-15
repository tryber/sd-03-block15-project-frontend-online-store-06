import React from 'react';

const renderStars = (value, onChange) => (
  <div>
    <label htmlFor="rating-stars">Avaliação</label>
    <input
      type="number"
      name="starsValue"
      id="rating-stars"
      max="5"
      min="0"
      step="1"
      value={value}
      onChange={(event) => onChange(event, 'starsValue')}
    />
  </div>
);

const renderComment = (value, onChange) => (
  <div>
    <label htmlFor="commentValue">Comentário</label>
    <textarea
      data-testid="product-detail-evaluation"
      row="20"
      col="30"
      id="commentValue"
      maxLength="300"
      name="commentValue"
      value={value}
      onChange={(event) => onChange(event, 'commentValue')}
    />
  </div>
);

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starsValue: '0',
      commentValue: '',
    };
    this.handleRatingChanges = this.handleRatingChanges.bind(this);
  }

  componentDidMount() {
    this.takeRating();
  }

  takeRating() {
    const commentValue = localStorage.getItem('commentValue');
    const starsValue = localStorage.getItem('starsValue');
    this.setState({ commentValue, starsValue });
  }

  handleRatingChanges(event, name) {
    this.setState({ [name]: event.target.value });
    localStorage.setItem(name, event.target.value.toString());
  }

  render() {
    const { starsValue, commentValue } = this.state;
    return (
      <form>
        {renderStars(starsValue, this.handleRatingChanges)}
        {renderComment(commentValue, this.handleRatingChanges)}
      </form>
    );
  }
}

export default Rating;
