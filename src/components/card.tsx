import { GetPaletteContext } from '@styles/paletteContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { A, H2, P } from './text';
import { PrimaryBtn } from './buttons';
import { useRouter } from 'next/router'
interface project{
  callToAction: string;
  name: string; localLink: string; externalLink: string; shortDescription: string; longDescription: string; imgSrc: string;
}
interface params extends React.HTMLAttributes<HTMLDivElement>{
  project:project
}

function ProjectCard({project,style}:params  ) {
  const selectedPalette = GetPaletteContext()
  const router = useRouter()
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
        <PrimaryBtn testId={project.name} onClick={()=>router.push(project.externalLink)}>{project.callToAction}</PrimaryBtn>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;