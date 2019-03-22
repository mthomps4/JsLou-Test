import {MigrationInterface, QueryRunner} from "typeorm";

export class typeAddress1553267068587 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "profile_details" ("id" SERIAL NOT NULL, "firstName" character varying(25) NOT NULL, "lastName" character varying(25) NOT NULL, "email" character varying NOT NULL, "bio" text NOT NULL, "github" character varying NOT NULL, "twitter" character varying NOT NULL, "website" character varying NOT NULL, "extraLinks" text NOT NULL, CONSTRAINT "PK_6a4ea5df5a57402cef108f3d4fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_746bc6df66c71050884cb906d4" ON "profile_details" ("email") `);
        await queryRunner.query(`CREATE TABLE "project" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "repos" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "eventId" integer, "contactsId" integer, CONSTRAINT "REL_cf3c7e416869210d9fdbf33d8a" UNIQUE ("eventId", "eventId"), CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "speaker" ("id" SERIAL NOT NULL, "firstName" character varying(25) NOT NULL, "lastName" character varying(25) NOT NULL, "email" character varying NOT NULL, "bio" text NOT NULL, "github" character varying NOT NULL, "twitter" character varying NOT NULL, "website" character varying NOT NULL, "extraLinks" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8441432fc32d602d417bf2687a9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_f898b972e1f18ea4bdf32dbab5" ON "speaker" ("email") `);
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "line1" character varying NOT NULL, "line2" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying(2) NOT NULL, "zip" integer NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "event" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "speakerId" integer, "locationId" SERIAL NOT NULL, "locationLine1" character varying NOT NULL, "locationLine2" character varying NOT NULL, "locationCity" character varying NOT NULL, "locationState" character varying(2) NOT NULL, "locationZip" integer NOT NULL, CONSTRAINT "PK_bc866693a8fb937a31944498b23" PRIMARY KEY ("id", "locationId"))`);
        await queryRunner.query(`CREATE TYPE "user_role_enum" AS ENUM('admin', 'editor', 'viewer')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying(25) NOT NULL, "lastName" character varying(25) NOT NULL, "email" character varying NOT NULL, "bio" text NOT NULL, "github" character varying NOT NULL, "twitter" character varying NOT NULL, "website" character varying NOT NULL, "extraLinks" text NOT NULL, "role" "user_role_enum" NOT NULL DEFAULT 'viewer', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_e12875dfb3b1d92d7d7c5377e2" ON "user" ("email") `);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_cf3c7e416869210d9fdbf33d8a4" FOREIGN KEY ("eventId", "eventId") REFERENCES "event"("id","locationId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_f89d5d3db5bc346ecb975493e35" FOREIGN KEY ("contactsId") REFERENCES "speaker"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_3b8230592d2db2638747344f6aa" FOREIGN KEY ("speakerId") REFERENCES "speaker"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_3b8230592d2db2638747344f6aa"`);
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_f89d5d3db5bc346ecb975493e35"`);
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_cf3c7e416869210d9fdbf33d8a4"`);
        await queryRunner.query(`DROP INDEX "IDX_e12875dfb3b1d92d7d7c5377e2"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "user_role_enum"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP INDEX "IDX_f898b972e1f18ea4bdf32dbab5"`);
        await queryRunner.query(`DROP TABLE "speaker"`);
        await queryRunner.query(`DROP TABLE "project"`);
        await queryRunner.query(`DROP INDEX "IDX_746bc6df66c71050884cb906d4"`);
        await queryRunner.query(`DROP TABLE "profile_details"`);
    }

}
