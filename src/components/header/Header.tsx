import * as React from "react";
import { Typography, Link } from "@material-ui/core";
import { LinkedIn, Instagram, GitHub } from "@material-ui/icons";
import Globe from "react-globe.gl";
import "./Header.css";
import countries from "./hexData.json";
import * as THREE from "three";

const globeMaterial = new THREE.MeshPhongMaterial();
globeMaterial.color = new THREE.Color(0x4050b5);
globeMaterial.emissive = new THREE.Color(0x0000ff);
globeMaterial.emissiveIntensity = 0.2;
globeMaterial.shininess = 5;
globeMaterial.specular = new THREE.Color(0xc6b7df);
globeMaterial.wireframe = false;

// controls.enableDamping = true;
// controls.dynamicDampingFactor = 0.01;
// controls.enablePan = false;
// controls.minDistance = 200;
// controls.maxDistance = 500;
// controls.rotateSpeed = 0.8;
// controls.zoomSpeed = 1;
// controls.autoRotate = false;

// controls.minPolarAngle = Math.PI / 3.5;
// controls.maxPolarAngle = Math.PI - Math.PI / 3;

const N = 10;
const arcsData = Array.from(Array(N).keys()).map((_, index) => ({
  startLat: (Math.random() - 0.5) * 180,
  startLng: (Math.random() - 0.5) * 360,
  endLat: (Math.random() - 0.5) * 180,
  endLng: (Math.random() - 0.5) * 360,
  name: "hello!",
}));

const Header = () => {
  return (
    <div className="header__main">
      <div className="header__main-name">
        <Typography
          className="header__main-name_sub"
          align="left"
          variant="subtitle1"
        >
          Hi, my name is
        </Typography>
        <Typography align="left" noWrap={true} variant="h1">
          Pierre Tran.
        </Typography>
      </div>
      <div className="header__main-links">
        <Link
          href="https://www.linkedin.com/in/pierretranva/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn className="header__main-links_linkedin" />
        </Link>
        <Link
          href="https://www.instagram.com/p_tran1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="header__main-links_instagram" />
        </Link>
        <Link
          href="https://github.com/pierretranva"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub className="header__main-links_github" />
        </Link>
      </div>
      <div className="header__main-globe">
        <Globe
          enablePointerInteraction={false}
          globeMaterial={globeMaterial}
          // globeImageUrl={darkGlobe}
          backgroundColor="rgba(0,0,0,0)"
          hexPolygonsData={countries.features}
          hexPolygonResolution={3}
          hexTopCurvatureResolution={100}
          hexPolygonColor={() => "rgba(255,255,255,.7)"}
          hexPolygonMargin={0.6}
          atmosphereColor="#c6b7df"
          showAtmosphere={true}
          atmosphereAltitude={0.25}
          arcsData={arcsData}
          arcColor={() => "rgba(255,105,180,0.8)"}
          arcAltitudeAutoScale={0.4}
          arcStroke={0.6}
          arcDashLength={0.9}
          arcDashGap={4}
          arcDashAnimateTime={() => 6000}
          arcsTransitionDuration={1000}
        />
      </div>
    </div>
  );
};

export default Header;
