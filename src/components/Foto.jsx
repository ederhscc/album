const Foto = ({ dados }) => {
  return (
    <div className="fotos">
      <img src={dados.urls.small} alt={dados.alt_description} />
    </div>
  );
};

export default Foto;
