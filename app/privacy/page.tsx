// app/privacy-policy/page.tsx
import styles from './PrivacyPolicy.module.css'

export const metadata = {
  title: 'Política de Privacidad | ViajAR',
  description: 'Política de Privacidad de ViajAR App',
}

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        POLÍTICA DE PRIVACIDAD – VIAJAR APP
      </h1>

      <p className={styles.updated}>
        Fecha de última actualización: 24 de octubre de 2025
      </p>

      <p className={styles.text}>
        <strong>Titular de la Plataforma:</strong> CUMULUS TECH S.A.S. <br />
        CUIT Nº 30-71878288-7 <br />
        Matrícula Nº 41774-A, Provincia de Córdoba, República Argentina
      </p>

      <section>
        <h2>1. INTRODUCCIÓN</h2>
        <p>
          La presente Política de Privacidad regula el tratamiento de los datos
          personales que los Usuarios facilitan al registrarse o utilizar la
          aplicación móvil ViajAR App (en adelante, la “Plataforma”), propiedad
          de CUMULUS TECH S.A.S. (en adelante, “ViajAR”).
        </p>
        <p>
          ViajAR respeta y protege la privacidad de los Usuarios conforme a lo
          dispuesto por la Ley Nº 25.326 de Protección de Datos Personales de la
          República Argentina, y normativa modificatoria y complementaria.
        </p>
      </section>

      <section>
        <h2>2. DATOS QUE SE RECOPILAN</h2>
        <p>Al utilizar la Plataforma, ViajAR podrá recopilar respecto del Usuario:</p>

        <ul>
          <li>
            <strong>(i) Datos de registro:</strong> nombre, apellido, número de
            Documento Nacional de Identidad, Libreta de Enrolamiento, Libreta
            Cívica (tratándose de Usuarios nacionales argentinos), número o
            identificación de Pasaporte (tratándose de Usuarios extranjeros),
            fecha de nacimiento, correo electrónico, número de teléfono,
            contraseña y domicilio.
          </li>
          <li>
            <strong>(ii) Datos de perfil:</strong> fotografía de perfil
            (opcional), género, edad, preferencias de viaje.
          </li>
          <li>
            <strong>(iii) Datos de uso:</strong> valoraciones, comentarios,
            historial de Trayectos publicados o reservados, puntos de encuentro
            y lugares de destino de Trayectos perfeccionados.
          </li>
          <li>
            <strong>(iv) Datos técnicos:</strong> dirección IP, tipo de
            dispositivo, sistema operativo, logs de actividad para fines de
            seguridad.
          </li>
        </ul>

        <p>
          ViajAR no solicitará información sensible (ej. origen racial y étnico,
          opiniones políticas, convicciones religiosas, filosóficas o morales,
          afiliación sindical e información referente a la salud o a la vida
          sexual), salvo que la normativa lo exija y a tal efecto autorice.
        </p>
      </section>

      <section>
        <h2>
          3. FINALIDADES DEL TRATAMIENTO. DATOS DE PÚBLICA VISUALIZACIÓN
        </h2>

        <p>
          Los datos personales de los Usuarios serán tratados con las siguientes
          finalidades:
        </p>

        <ul>
          <li>(i) Permitir el registro, autenticación y gestión de cuentas de Usuario.</li>
          <li>(ii) Facilitar la publicación y reserva de Trayectos.</li>
          <li>(iii) Promover la confianza entre Usuarios mediante el sistema de reputación.</li>
          <li>(iv) Gestionar consultas, reclamos o reportes.</li>
          <li>(v) Garantizar el funcionamiento seguro de la Plataforma.</li>
          <li>(vi) Cumplir obligaciones legales y regulatorias.</li>
        </ul>

        <p>
          Los Usuarios consienten que los siguientes datos sean públicamente
          visualizables por los demás Usuarios de la Plataforma:
        </p>

        <ul>
          <li>(a) Nombre y Apellidos completos del Usuario.</li>
          <li>(b) Edad (expresada en números, sin indicación de fecha de nacimiento).</li>
          <li>(c) Reputación del Usuario (Conductor o Pasajero).</li>
          <li>
            (d) Datos del Vehículo (Usuario Conductor):
            <ul>
              <li>Dominio / Patente</li>
              <li>Marca</li>
              <li>Modelo</li>
              <li>Año de fabricación</li>
            </ul>
          </li>
          <li>(e) Foto de Perfil.</li>
        </ul>

        <p>
          En ningún caso los datos recopilados serán utilizados con fines
          distintos a los expresamente previstos en esta Política, sin
          consentimiento previo del Usuario.
        </p>
      </section>

      <section>
        <h2>4. BASE LEGAL</h2>
        <p>
          El tratamiento de datos personales se realiza conforme al
          consentimiento del Usuario, quien lo otorga al registrarse y aceptar
          esta Política. Asimismo, ViajAR podrá tratar datos en cumplimiento de
          obligaciones legales o contractuales.
        </p>
      </section>

      <section>
        <h2>5. CESIÓN Y TRANSFERENCIA DE DATOS</h2>

        <p><strong>5.1.</strong> ViajAR no vende ni alquila datos personales a terceros.</p>

        <p>
          <strong>5.2.</strong> Los datos podrán ser compartidos con proveedores
          de servicios tecnológicos (ej. hosting, seguridad, mensajería) bajo
          estricta confidencialidad.
        </p>

        <p>
          <strong>5.3.</strong> En caso de adquisición de la Plataforma o de
          CUMULUS TECH S.A.S., los datos podrán ser transferidos al nuevo
          titular, quien deberá respetar la presente Política y la Ley Nº
          25.326.
        </p>

        <p>
          <strong>5.4.</strong> Sólo se transferirán datos a terceros países que
          ofrezcan un nivel de protección adecuado conforme a la Ley Nº 25.326.
        </p>

        <p>
          <strong>5.5.</strong> Los datos podrán ser compartidos con autoridades
          judiciales, administrativas o aduaneras que lo requieran formalmente.
        </p>
      </section>

      <section>
        <h2>6. CONSERVACIÓN DE LOS DATOS</h2>
        <p>
          Los datos personales se conservarán mientras la Cuenta esté activa y,
          luego de su baja, durante el tiempo necesario para cumplir
          obligaciones legales o resolver disputas. Posteriormente serán
          eliminados o anonimizados.
        </p>
      </section>

      <section>
        <h2>7. DERECHOS DE LOS USUARIOS</h2>
        <p>
          El Usuario podrá ejercer sus derechos de acceso, rectificación,
          actualización y supresión de sus datos personales (derechos ARCO),
          conforme al artículo 14 de la Ley Nº 25.326.
        </p>

        <p>Para ejercer estos derechos, el Usuario podrá:</p>

        <ul>
          <li>(i) Acceder a la opción “Eliminar cuenta” dentro de la aplicación.</li>
          <li>
            (ii) Enviar una solicitud por correo electrónico a{' '}
            <a href="mailto:admin@viajarapp.com">admin@viajarapp.com</a>
          </li>
        </ul>

        <p>
          La Agencia de Acceso a la Información Pública (AAIP) es el órgano de
          control de la Ley Nº 25.326.
        </p>
      </section>

      <section>
        <h2>8. SEGURIDAD</h2>
        <p>
          ViajAR implementa medidas de seguridad razonables y proporcionales para
          proteger los datos personales. No obstante, ningún sistema de Internet
          es completamente seguro y el Usuario asume los riesgos inherentes.
        </p>
      </section>

      <section>
        <h2>9. MENORES DE EDAD</h2>
        <p>
          La Plataforma está destinada únicamente a personas humanas mayores de
          18 años. ViajAR no recopila intencionadamente datos de menores ni
          incapaces.
        </p>
      </section>

      <section>
        <h2>10. MODIFICACIONES A LA POLÍTICA</h2>
        <p>
          ViajAR podrá modificar esta Política en cualquier momento. La versión
          vigente será publicada en la Plataforma indicando la fecha de última
          actualización.
        </p>
      </section>

      <section>
        <h2>11. CONTACTO</h2>
        <p>
          Para consultas o ejercicio de derechos relacionados con la privacidad,
          el Usuario podrá comunicarse a:{' '}
          <a href="mailto:admin@viajarapp.com">admin@viajarapp.com</a>
        </p>

        <p className={styles.legal}>
          Aviso Legal: La Plataforma ViajAR App es de propiedad exclusiva de
          CUMULUS TECH S.A.S., CUIT Nº 30-71878288-7, Matrícula Nº 41774-A, con
          domicilio en la Provincia de Córdoba, República Argentina.
        </p>
      </section>
    </main>
  )
}
