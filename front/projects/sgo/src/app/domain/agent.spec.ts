import Agent from './agent';

describe('Agent', () => {
  it('has a matricule', () => {
    const matricule = '1234';
    const agent = new Agent(matricule);
    expect(agent.getMatricule()).toEqual(matricule);
  });
});
