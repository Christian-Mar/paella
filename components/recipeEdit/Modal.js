import { useState, useEffect } from 'react';
import reactDom from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import styles from '../../styles/ModalEditRecipe.module.css';

const Modal = ({ show, onClose, children, title }) => {
	const [isBrowser, setIsBrowser] = useState(false);
	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const handleClose = e => {
		e.preventDefault();
		onClose();
	};

	const modalContent = show ? (
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<div className={styles.header}>
					<a href='#' onClick={handleClose}>
						<FaTimes />
					</a>
				</div>
				{title && (
					<div className={styles.title}>
						<h2>{title}</h2>
					</div>
				)}
				<div className={styles.body}>{children}</div>
			</div>
		</div>
	) : null;

	if (isBrowser) {
		return reactDom.createPortal(
			modalContent,
			document.getElementById('modal-root')
		);
	} else {
		return null;
	}
};

export default Modal;