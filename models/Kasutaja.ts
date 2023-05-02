export class Kasutaja {
    constructor(
      public id: number,
      public kasutajanimi: string,
      public parool: string,
      public eesnimi: string,
      public perenimi: string
    ) {}
  
    getId() {
      return this.id;
    }
      getkasutajanimi() {
      return this.kasutajanimi;
    }
      getparool() {
      return this.parool;
    }
      geteesnimi() {
      return this.eesnimi;
    }
      getLastName() {
      return this.perenimi;
    }
  
    setId(id: number) {
      this.id = id;
    }
      setkasutajanimi(kasutajanimi: string) {
      this.kasutajanimi = kasutajanimi;
    }
      setparool(parool: string) {
      this.parool = parool;
    }
      seteesnimi(eesnimi: string) {
      this.eesnimi = eesnimi;
    }
      setLastName(perenimi: string) {
      this.perenimi = perenimi;
    }
  }
  