const SliderButton = () => {
  return (
    <div>
      <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href="#slide4" className="btn btn-circle btn-outline btn-error">
          ❮
        </a>
        <a href="#slide2" className="btn btn-circle btn-outline btn-error">
          ❯
        </a>
      </div>
    </div>
  );
};

export default SliderButton;
