import {MigrationInterface, QueryRunner} from "typeorm";

export class relations1553282883691 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_0083f0fdff3d66c43f98005089c"`);
        await queryRunner.query(`ALTER TABLE "project" RENAME COLUMN "eventId" TO "eventsId"`);
        await queryRunner.query(`ALTER TABLE "project" RENAME CONSTRAINT "REL_0083f0fdff3d66c43f98005089" TO "UQ_a5e88c6124abce3ed8f7a532d24"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "location"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "eventsId" integer`);
        await queryRunner.query(`ALTER TABLE "event" ADD "meetupUrl" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "event" ADD "extraLinks" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" ADD "eventsId" integer`);
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "UQ_a5e88c6124abce3ed8f7a532d24"`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_a5e88c6124abce3ed8f7a532d24" FOREIGN KEY ("eventsId") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_580171ee53de81fde6754c30bdc" FOREIGN KEY ("eventsId") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_f8506772dd510f9dd7a9026d6bf" FOREIGN KEY ("eventsId") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_f8506772dd510f9dd7a9026d6bf"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_580171ee53de81fde6754c30bdc"`);
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_a5e88c6124abce3ed8f7a532d24"`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "UQ_a5e88c6124abce3ed8f7a532d24" UNIQUE ("eventsId")`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "eventsId"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "extraLinks"`);
        await queryRunner.query(`ALTER TABLE "event" DROP COLUMN "meetupUrl"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "eventsId"`);
        await queryRunner.query(`ALTER TABLE "event" ADD "location" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" RENAME CONSTRAINT "UQ_a5e88c6124abce3ed8f7a532d24" TO "REL_0083f0fdff3d66c43f98005089"`);
        await queryRunner.query(`ALTER TABLE "project" RENAME COLUMN "eventsId" TO "eventId"`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_0083f0fdff3d66c43f98005089c" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
