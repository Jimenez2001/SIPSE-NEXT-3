"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Aside({ open, setOpen }) {
  const router = useRouter();

  return (
    <div className={`${open ? "aside" : "contraer-aside"} text-light`}>
<<<<<<< HEAD
      <button
        onClick={() => setOpen(!open)}
        className="btn btn-danger icon-aside"
      >
        x
      </button>
      <Link
        href="/dashboard"
        className={`text-light fs-1 text-decoration-none ${!open && "d-none"}`}
      >
        SIPSE
      </Link>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          {/* HISTORIAL */}
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion-header collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Historial
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="list-group ">
              <a
                href="/historial"
                className="list-group-item accordion-content"
                aria-current="true"
              >
                Historial de Errores
              </a>
             {/*  <a href="#" className="list-group-item list-group-item-action">
                Segundo Item
              </a> */}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          {/* CATALOGOS */}
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion-header collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Catálogos
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-content list-group">
              <a
                href="/catalogos/catunidmedida"
                className="list-group-item accordion-content"
                aria-current="true"
              >
                Categoría Unidad de Medida
              </a>
              <a href="/catalogos/unidadmedida" className="list-group-item accordion-content">
                Unidad de Medida
              </a>
              <a href="/catalogos/responsable" className="list-group-item accordion-content">
                Responsable
              </a>
              <a href="/catalogos/indicador" className="list-group-item accordion-content">
                Indicador
              </a>
              <a href="/catalogos/vinculacion" className="list-group-item accordion-content">
                Vinculación
              </a>
              <a href="/catalogos/dependencias" className="list-group-item accordion-content">
                Dependencias
              </a>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          {/* ADMINISTRACION */}
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion-header collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Administración
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="list-group">
              <a
                href="/administracion/asignardependencia"
                className="list-group-item accordion-content"
                aria-current="true"
              >
                Asignar Dependencia
              </a>
             {/*  <a href="#" className="list-group-item list-group-item-action">
                Unidad de Medida
              </a> */}
            </div>
          </div>
        </div>
      </div>
=======
      <button onClick={() => setOpen(!open)} className="btn btn-danger icon-aside">x</button>
      {/* <svg
        onClick={() => setOpen(!open)}
        className="icon-aside"
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-arrow-big-left-line-filled"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h5a1 1 0 0 0 1 -1v-6l-.007 -.117a1 1 0 0 0 -.993 -.883l-5 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z"
          stroke-width="0"
          fill="currentColor"
        />
        <path
          d="M4.415 12l6.585 -6.586v3.586l.007 .117a1 1 0 0 0 .993 .883l5 -.001v4l-5 .001a1 1 0 0 0 -1 1v3.586l-6.585 -6.586z"
          stroke-width="0"
          fill="currentColor"
        />
        <path
          d="M21 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
          stroke-width="0"
          fill="currentColor"
        />
      </svg> */}
      <Link href="/dashboard" className={`text-light fs-1 text-decoration-none ${!open && "d-none"}`}>
        SIPSE
      </Link>
>>>>>>> 3d6d9146906b4d2827fcb329d4ab467c3d548e47
    </div>
  );
}
