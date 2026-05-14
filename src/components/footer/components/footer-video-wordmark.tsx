import { getAssetUrl } from "@/lib/get-asset-url";
import {
  FooterVideoWordmarkFallback,
  FooterVideoWordmarkLetter,
  FooterVideoWordmarkStrokeLayer,
  FooterVideoWordmarkRoot,
  FooterVideoWordmarkVideo
} from "../styles/footer-video-wordmark.styles";

type FooterVideoWordmarkProps = {
  label: string;
  poster: string;
  src: string;
};

export function FooterVideoWordmark({ label, poster, src }: FooterVideoWordmarkProps) {
  return (
    <FooterVideoWordmarkRoot aria-hidden="true">
      <FooterVideoWordmarkFallback>{label}</FooterVideoWordmarkFallback>
      <FooterVideoWordmarkStrokeLayer>
        <FooterVideoWordmarkLetter
          $height={200.363}
          $left={0}
          $top={-5}
          $width={203.811}
          alt=""
          src={getAssetUrl("hlym/footer-wordmark/y-stroke.svg")}
        />
        <FooterVideoWordmarkLetter
          $height={200.363}
          $left={236.48}
          $top={-5}
          $width={208.032}
          alt=""
          src={getAssetUrl("hlym/footer-wordmark/a-stroke.svg")}
        />
        <FooterVideoWordmarkLetter
          $height={200.363}
          $left={473.6}
          $top={-5}
          $width={230.278}
          alt=""
          src={getAssetUrl("hlym/footer-wordmark/m-stroke.svg")}
        />
        <FooterVideoWordmarkLetter
          $height={200.363}
          $left={714.48}
          $top={-5}
          $width={208.032}
          alt=""
          src={getAssetUrl("hlym/footer-wordmark/a-stroke.svg")}
        />
        <FooterVideoWordmarkLetter
          $height={200.363}
          $left={939.06}
          $top={-5}
          $width={181.188}
          alt=""
          src={getAssetUrl("hlym/footer-wordmark/h-stroke.svg")}
        />
        <FooterVideoWordmarkLetter
          $height={200.363}
          $left={1144.49}
          $top={-5}
          $width={208.032}
          alt=""
          src={getAssetUrl("hlym/footer-wordmark/a-stroke.svg")}
        />
      </FooterVideoWordmarkStrokeLayer>
      <FooterVideoWordmarkVideo autoPlay loop muted playsInline poster={poster} preload="metadata">
        <source src={src} type="video/mp4" />
      </FooterVideoWordmarkVideo>
    </FooterVideoWordmarkRoot>
  );
}
