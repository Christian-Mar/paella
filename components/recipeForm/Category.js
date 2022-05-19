import styles from '../../styles/CreateRecipe.module.css';

const Category = ({ category, updateForm}) => {
	const onChange=(e) => updateForm(e.target.name, e.target.value)
	return (
		<div>
			<div className={styles.form__radio}>
				<h3 className={styles.label}>Category: </h3>
				<div className={styles.form__radioFieldContainer}>
					<input
						className={styles.form__radioField}
						type='radio'
						name='category'
						onChange={onChange}
						value='breakfast'
						checked={category === 'breakfast'}
						id='breakfast'
					/>
					<label className={styles.form__radioLabel} htmlFor='breakfast'>
						breakfast
					</label>
					<input
						className={styles.form__radioField}
						type='radio'
						name='category'
						onChange={onChange}
						value='soup'
						checked={category === 'soup'}
						id='soup'
					/>
					<label className={styles.form__radioLabel} htmlFor='soup'>
						soup
					</label>
					<input
						className={styles.form__radioField}
						type='radio'
						name='category'
						onChange={onChange}
						value='starter'
						checked={category === 'starter'}
						id='starter'
					/>
					<label className={styles.form__radioLabel} htmlFor='starter'>
						starter
					</label>
					<input
						className={styles.form__radioField}
						type='radio'
						name='category'
						onChange={onChange}
						value='salad'
						checked={category === 'salad'}
						id='salad'
					/>
					<label className={styles.form__radioLabel} htmlFor='salad'>
						salad
					</label>
					<input
						className={styles.form__radioField}
						type='radio'
						name='category'
						onChange={onChange}
						value='snack'
						checked={category === 'snack'}
						id='snack'
					/>
					<label className={styles.form__radioLabel} htmlFor='snack'>
						snack
					</label>
					<input
						className={styles.form__radioField}
						type='radio'
						name='category'
						onChange={onChange}
						value='dinner'
						checked={category === 'dinner'}
						id='dinner'
					/>
					<label className={styles.form__radioLabel} htmlFor='dinner'>
						dinner
					</label>
					<input
						className={styles.form__radioField}
						type='radio'
						name='category'
						onChange={onChange}
						value='dessert'
						checked={category === 'dessert'}
						id='dessert'
					/>
					<label className={styles.form__radioLabel} htmlFor='dessert'>
						dessert
					</label>
				</div>
			</div>
		</div>
	);
};

export default Category;