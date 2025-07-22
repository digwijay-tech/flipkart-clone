const AdsBanner = () => {
  return (
    <div className="col-[7/13] cursor-pointer mb-4 min-[1190px]:hidden">
      <div className="h-[616px] overflow-hidden flex justify-center items-center relative ">
        <div className="w-full flex basis-auto shrink-0 flex-col">
          <a href="#" className="aspect-[490/632] w-full block ">
            <picture>
              <source
                srcSet="https://rukminim1.flixcart.com/www/800/1030/promos/26/09/2023/6c3c5fe2-c236-4fa2-8d97-595e1e01da01.jpg?q=80 1x, https://rukminim1.flixcart.com/www/1600/2060/promos/26/09/2023/6c3c5fe2-c236-4fa2-8d97-595e1e01da01.jpg?q=60 2x, "
                media="(min-width: 1192px)"
              />
              <source
                srcSet="https://rukminim1.flixcart.com/www/500/640/promos/26/09/2023/6c3c5fe2-c236-4fa2-8d97-595e1e01da01.jpg?q=80 1x, https://rukminim1.flixcart.com/www/1000/1280/promos/26/09/2023/6c3c5fe2-c236-4fa2-8d97-595e1e01da01.jpg?q=60 2x, "
                media="(min-width: 768px) and (max-width: 1191px)"
              />
              <img
                src="https://rukminim1.flixcart.com/www/500/640/promos/26/09/2023/6c3c5fe2-c236-4fa2-8d97-595e1e01da01.jpg?q=90"
                srcSet="https://rukminim1.flixcart.com/www/240/310/promos/26/09/2023/6c3c5fe2-c236-4fa2-8d97-595e1e01da01.jpg?q=80 1x, https://rukminim1.flixcart.com/www/480/620/promos/26/09/2023/6c3c5fe2-c236-4fa2-8d97-595e1e01da01.jpg?q=60 2x, "
                className="w-full block object-cover aspect-[490/632]"
              />
            </picture>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdsBanner;
