import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1553113025634 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "event" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "speaker" ("id" SERIAL NOT NULL, "firstName" character varying(25) NOT NULL, "lastName" character varying(25) NOT NULL, "email" character varying NOT NULL, "bio" text NOT NULL, "github" character varying NOT NULL, "twitter" character varying NOT NULL, "website" character varying NOT NULL, "extraLinks" text NOT NULL, CONSTRAINT "PK_8441432fc32d602d417bf2687a9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "user_role_enum" AS ENUM('admin', 'editor', 'viewer')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying(25) NOT NULL, "lastName" character varying(25) NOT NULL, "email" character varying NOT NULL, "role" "user_role_enum" NOT NULL DEFAULT 'viewer', "bio" text NOT NULL, "github" character varying NOT NULL, "twitter" character varying NOT NULL, "website" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "user_role_enum"`);
        await queryRunner.query(`DROP TABLE "speaker"`);
        await queryRunner.query(`DROP TABLE "project"`);
        await queryRunner.query(`DROP TABLE "event"`);
    }

}
