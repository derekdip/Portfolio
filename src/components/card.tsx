import { GetPaletteContext } from '@styles/paletteContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { A, H2, P } from './text';
interface project{
  callToAction: string;
  name: string; localLink: string; externalLink: string; shortDescription: string; longDescription: string; imgSrc: string;
}
interface params extends React.HTMLAttributes<HTMLDivElement>{
  project:project
}

function ProjectCard({project,style}:params  ) {
  const selectedPalette = GetPaletteContext()
  return (
    <Card style={style}>
      <Card.Img variant="top" src={project.imgSrc} />
      <Card.Body style={{backgroundColor:selectedPalette.secondary}} >
        <H2 style={{color:selectedPalette.primary}}>
          <A href={project.localLink}>
          {project.name}
          </A>
          </H2>
        <P>
          {project.shortDescription}
        </P>
        <Button variant="primary" href={project.externalLink}>{project.callToAction}</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;