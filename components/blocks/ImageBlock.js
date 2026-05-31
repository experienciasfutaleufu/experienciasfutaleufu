export const ImageBlock = ({ data }) => {
  //console.log("hb"+ data)
  return (
    <>
      {data.imgSrc && (
        <img
          src={data.imgSrc}
          alt={data.alt || data.title || ""}
          className=" mx-auto fotoImageBlock"
        />
      )}
    </>
  );
};
