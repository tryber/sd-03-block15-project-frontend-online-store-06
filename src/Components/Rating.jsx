import React from 'react';

const renderStars = (value, onChange) => (
  <div>
    <label htmlFor="rating-stars">
      Avaliação
      <input
        type="number"
        name="starsValue"
        id="rating-stars"
        max="5"
        min="0"
        step="0.5"
        value={value}
        onChange={(event) => onChange(event, 'starsValue')}
      />
    </label>
  </div>
);

const renderComment = (value, onChange) => (
  <div>
    <label htmlFor="commentValue">
      Comentário
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
    </label>
  </div>
);

class Rating extends React.Component {
  constructor(props) {
    super(props);
    const commentValue = localStorage.getItem('commentValue');
    const starsValue = localStorage.getItem('starsValue');
    this.state = {
      starsValue: starsValue || '0',
      commentValue: commentValue || '',
    };
    this.handleRatingChanges = this.handleRatingChanges.bind(this);
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
