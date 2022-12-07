import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiPhp,
  DiLaravel,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiPostgresql,
  DiPython,
  DiGit,
  DiGo,
  DiAndroid,
  DiDjango,
  DiUnitySmall,
} from "react-icons/di";
import {
  SiTypescript,
  SiAngularjs,
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiEthereum,
  SiFlutter,
  SiGo,
  SiRust,
  SiUnity,
  SiDjango,
  SiGraphql,
  SiRedux,
} from "react-icons/si";

function Techstack() {
  const renderTooltip = (msg) => <Tooltip>{msg}</Tooltip>;
  const renderTechItem = (stack, tooltip) => (
    <OverlayTrigger placement="top" overlay={renderTooltip(tooltip)}>
      <Col xs={4} md={2} className="tech-icons">
        {stack}
      </Col>
    </OverlayTrigger>
  );

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {renderTechItem(<DiPython />, "Python")}
      {renderTechItem(<DiPhp />, "PHP")}
      {renderTechItem(<DiJavascript1 />, "JavaScript")}
      {renderTechItem(<SiTypescript />, "TypeScript")}
      {renderTechItem(<DiNodejs />, "Node.js")}
      {renderTechItem(<DiReact />, "React")}
      {renderTechItem(<SiRedux />, "Redux")}
      {renderTechItem(<SiAngularjs />, "Angular")}
      {renderTechItem(<DiMongodb />, "MongoDB")}
      {renderTechItem(<SiNextdotjs />, "Next.js")}
      {renderTechItem(<DiDjango />, "Django")}
      {renderTechItem(<SiFlutter />, "Flutter")}
      {renderTechItem(<SiFirebase />, "Firebase")}
      {renderTechItem(<SiGraphql />, "GraphQL")}
      {renderTechItem(<SiUnity />, "Unity")}
    </Row>
  );
}

export default Techstack;
