
export default function About() {
    return (
        <div className='m-4'>
          <div className="m-auto p-4 rounded" id="resume">
            <h5 className='text-uppercase smallheader'>Skills</h5>
            <h1 id="contact-header">My Experience and Toolkit</h1>
            <p><a href={resume} target="_blank"> Click here</a> to see my resume. <br/>
            These are the development tools I've used in previous projects:</p>
            <Container>
            <Row className='text-center'>
              {svgs.map((svg, i) => (
                <Col key={i} >
                  {svg.element}
                  <p className={`icon-labels color-${i % 4}`}>{svg.text}</p>
                </Col>
              ))}
            </Row>
            </Container>
          </div>
        </div>
      );
    }