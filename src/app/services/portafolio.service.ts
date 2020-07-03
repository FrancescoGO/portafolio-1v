import { Injectable } from '@angular/core';
import { ArregloGeneral } from '../interfaces/arreglogeneral.interface';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  private urlCloudDinary = 'https://res.cloudinary.com/francescogo/image/upload';
  private urlUdemy = 'https://udemy-certificate.s3.amazonaws.com';

  public arrImgTecnologias: ArregloGeneral[] = [

    {
      source: 'logoAngular.svg',
      title : 'Angular 💚'
    },
    {
      source: 'logoHtml.svg',
      title : 'HTML'
    },
    {
      source: 'logoCss.svg',
      title : 'CSS'
    },
    {
      source: 'logoJs.svg',
      title : 'JavaScript'
    },
    {
      source: 'logoTypescript.svg',
      title : 'TypeScript'
    },
    {
      source: 'logoFirebase.svg',
      title : 'Firebase'
    },
    {
      source: 'logoGit.svg',
      title : 'Git'
    },
    {
      source: 'logoGithub.svg',
      title : 'Github'
    },
    {
      source: 'logoTerminal.svg',
      title : 'Terminal y Línea de Comandos'
    },
    {
      source: 'logoVscode.svg',
      title : 'VS Code'
    },
    {
      source: 'logoAdobexd.svg',
      title : 'Adobe XD'
    },
    {
      source: 'logoVisualbasic6.0.svg',
      title : 'Visual Basic 6.0'
    },
    {
      source: 'logoVisualstudio.svg',
      title : 'Visual Studio Escritorio ( V.B - C# )'
    },
    {
      source: 'logoSQLServer.svg',
      title : 'Microsoft SQL Server 2016'
    },

  ];

  public arrCertiPlatzi: ArregloGeneral[] = [

    {
      source: `${this.urlCloudDinary}/v1593570614/Certificados%20Platzi/imagenes/Curso_de_Estrategias_en_Linea_llkt3g.png`,
      title : 'Curso de Estrategias en Linea',
      pdf   : `${this.urlCloudDinary}/v1592780073/Certificados%20Platzi/Curso_de_Estrategias_para_Aprender_en_L%C3%ADnea_Efectivamente_r8cvfu.pdf`
    },
    {
      source: `${this.urlCloudDinary}/v1593569390/Certificados%20Platzi/imagenes/Curso_de_Pensamiento_Logico_ixwkwy.png`,
      title : 'Curso de Pensamiento Logico',
      pdf   : `${this.urlCloudDinary}/v1592780074/Certificados%20Platzi/Curso_de_Pensamiento_Lógico_rt4x5t.pdf`
    },
    {
      // tslint:disable-next-line: max-line-length
      source: `${this.urlCloudDinary}/v1593566995/Certificados%20Platzi/imagenes/Curso_de_Introduccion_a_Terminal_y_Linea_de_Comandos_sx7pez.png`,
      title : 'Curso de Introduccion a Terminal y Linea de Comandos',
      pdf   : `${this.urlCloudDinary}/v1592780075/Certificados%20Platzi/Curso_de_Introduccion_a_Terminal_y_Linea_de_Comandos_fbvbhi.pdf`
    },
    {
      source: `${this.urlCloudDinary}/v1593568893/Certificados%20Platzi/imagenes/Curso_Profesional_de_Git_y_Github_y18lf0.png`,
      title : 'Curso Profesional de Git y Github',
      pdf   : `${this.urlCloudDinary}/v1592780075/Certificados%20Platzi/Curso_Profesional_de_Git_y_Github_nbkrwt.pdf`
    },
    {
      source: `${this.urlCloudDinary}/v1593570114/Certificados%20Platzi/imagenes/Curso_de_Desarrollo_Web_Online_mcgqxn.png`,
      title : 'Curso de Desarrollo Web Online',
      pdf   : `${this.urlCloudDinary}/v1592780074/Certificados%20Platzi/Curso_Desarrollo_Web_Online_tznuop.pdf`
    },
    {
      source: `${this.urlCloudDinary}/v1593570770/Certificados%20Platzi/imagenes/Curso_de_Abode_XD_tz3qga.png`,
      title : 'Curso de Adode XD',
      pdf   : `${this.urlCloudDinary}/v1592780073/Certificados%20Platzi/Curso_de_Adobe_XD_mhlj2d.pdf`
    },

  ];

  public arrCertiUdemy: ArregloGeneral[] = [

    {
      source: `${this.urlUdemy}/image/UC-b25f580f-ecd7-45e3-a4e2-dc8568eb0ba9.jpg`,
      title : 'Curso de TypeScript',
      pdf   : `${this.urlUdemy}/pdf/UC-b25f580f-ecd7-45e3-a4e2-dc8568eb0ba9.pdf`
    },
    {
      source: `${this.urlUdemy}/image/UC-495e8176-26f0-4ddb-bd8e-a307b93503ed.jpg`,
      title : 'Curso de Angular de Cero a Experto',
      pdf   : `${this.urlUdemy}/pdf/UC-495e8176-26f0-4ddb-bd8e-a307b93503ed.pdf`
    },
    {
      source: `${this.urlUdemy}/image/UC-e3da0a2b-dc91-430e-ae75-f7c651c34875.jpg`,
      title : 'Curso de Angular Experiencia Uno',
      pdf   : `${this.urlUdemy}/pdf/UC-e3da0a2b-dc91-430e-ae75-f7c651c34875.pdf`
    },
    {
      source: `${this.urlUdemy}/image/UC-b1f85ce9-8ff6-474b-ba6d-d81a9d589c57.jpg`,
      title : 'Curso de Git & Github',
      pdf   : `${this.urlUdemy}/pdf/UC-b1f85ce9-8ff6-474b-ba6d-d81a9d589c57.pdf`
    },
    {
      source: `${this.urlUdemy}/image/UC-931e56f3-dc1b-4352-ab6c-b78ecd3d4c06.jpg`,
      title : 'Curso de Javascript Moderno',
      pdf   : `${this.urlUdemy}/pdf/UC-931e56f3-dc1b-4352-ab6c-b78ecd3d4c06.pdf`
    },
    {
      source: `${this.urlUdemy}/image/UC-YNTYGAW3.jpg`,
      title : 'Curso de VS Code',
      pdf   : `${this.urlUdemy}/pdf/UC-YNTYGAW3.pdf`
    },

  ];

  public arrProyectosDeEstudio: ArregloGeneral[] = [

    {
      source: `${this.urlCloudDinary}/v1593736040/Proyectos/coderOne_1_csmes2.png`,
      title : `Proyecto de Portfolio de Productos (Angular - Firebase)`,
      link   : `https://francescogo.github.io/angular-templatehtml/`
    },
    {
      source: `${this.urlCloudDinary}/v1593736041/Proyectos/coderFour_mejheu.png`,
      title : 'Proyecto SpotiApp (Angular)',
      link   : `https://francescogo.github.io/spotiapp`
    },
    {
      source: `${this.urlCloudDinary}/v1593746239/Proyectos/coderSeven_rjjqsk.png`,
      title : `Proyecto de Login / Register (Angular - Firebase)`,
      link   : `https://francescogo.github.io/loginapp-angular/`
    },
    {
      source: `${this.urlCloudDinary}/v1593736037/Proyectos/coderThree_bmryun.png`,
      title : `Proyecto de Votación (GOTY) (Angular - Firebase)`,
      link   : `https://firestore-grafica-74dd1.firebaseapp.com/`
    },
    {
      source: `${this.urlCloudDinary}/v1593736041/Proyectos/coderTwo_uwow57.png`,
      title : `Proyecto de Peliculas (Adobe XD)`,
      link   : `https://xd.adobe.com/view/fada994e-232f-490e-6b33-66cdc708a890-8ceb/`
    },
    {
      source: `${this.urlCloudDinary}/v1593736042/Proyectos/coderSix_bd1ihm.png`,
      title : `Proyecto de Peliculas (Angular)`,
      link   : `https://francescogo.github.io/peliculasapp-angular/`
    },

  ];

  constructor() { }
}
