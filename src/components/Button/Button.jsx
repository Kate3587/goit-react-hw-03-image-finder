import css from './Button.module.css'

const Button = ({onLoadMore}) => (
    <div className={css.Button}>
        <button
        onClick={onLoadMore}
        type="button">
        Load More
        </button>  
    </div>
);

export default Button;