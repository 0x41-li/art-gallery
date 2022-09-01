import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from "imagemin-svgo";

const files = await imagemin(["build/static/media/*.{jpg,png,svg}"], {
  destination: "build/static/media/",
  plugins: [
    imageminMozjpeg(),
    imageminPngquant(),
    imageminSvgo({
      plugins: [
        {
          name: "removeViewBox",
          active: false,
        },
      ],
    }),
  ],
});
