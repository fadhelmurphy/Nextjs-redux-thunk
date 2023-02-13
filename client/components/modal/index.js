const Modal = ({
	children,
	title,
	headerIconSrc,
	onHide,
	show,
	contentBackground,
}) => (
	<>
		<div className={`drawer-with-overlay-filter ${show ? "show" : ""}`} onClick={onHide} />
		<div className={`modal ${show ? "show" : ""}`}>
			<div className="modal-header">
				<div className="modal-header-title">
					{headerIconSrc && (
						// eslint-disable-next-line @next/next/no-img-element
						<img
							alt="modal-header-icon"
							src={headerIconSrc}
							className="modal-header-icon"
						/>
					)}
					<p>{title}</p>
				</div>
				<div className="close-modal" onClick={onHide}>
					<div className="close-modal-icon">
						X
					</div>
				</div>
			</div>
			<div className="modal-content">
				{children}
			</div>
		</div>
    <style>
      {`
      .modal-content img{
      object-fit: contain;
      width: 100%;
    }
      `}
      </style>
		<style jsx>
			{`
        .drawer-with-overlay-filter {
          display: block;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          position: fixed;
          z-index: 1100;
          opacity: 0;
          visibility: hidden;
          transition: all .4s ease;
          background: #000;
        }
        .drawer-with-overlay-filter.show {
          opacity: 0.5;
          visibility: visible;
        }
        .modal {
          position: fixed;
          z-index: 1100;
          width: max-content;
          height: max-content;
          max-height: 100vh;
          background-color: ${contentBackground};
          visibility: hidden;
          margin: auto;
          border: 1px solid #888;
					transition: all .4s ease;
          left: 0;
          right: 0;
          top: 0;
          bottom: -100%;
          opacity: 0;
        }
        .modal.show {
          bottom: 0;
					opacity: 1;
					visibility: visible;
        }
        div.close-modal {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        div.close-modal .close-modal-icon {
          cursor: pointer;
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          box-shadow: inset 0px -1px 0px #DFE3E8;
          padding: 16px 20px;
        }
        .modal-header .modal-header-title {
          text-align: center;
          display: flex;
          gap: 12px;
        }
        .modal-header .modal-header-title img {
          height: 100%;
          width: 72px;
        }
        .modal-header .modal-header-title p {
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
          letter-spacing: 0.04em;
          margin: auto 0;
        }
        .modal-content {
          height: max-content;
          max-height: 100vh;
          overflow-y: auto;
        }
        .modal-content::-webkit-scrollbar {
          display: none;
        }
      `}
		</style>
	</>
);
export default Modal