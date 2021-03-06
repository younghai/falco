# Generated by Django 2.1.5 on 2019-02-06 13:46

import audits.models
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [("audits", "0001_initial")]

    operations = [
        migrations.CreateModel(
            name="AuditStatusHistory",
            fields=[
                (
                    "uuid",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                (
                    "status",
                    models.CharField(
                        choices=[
                            (audits.models.AvailableStatuses("PENDING"), "PENDING"),
                            (audits.models.AvailableStatuses("ERROR"), "ERROR"),
                            (audits.models.AvailableStatuses("SUCCESS"), "SUCCESS"),
                        ],
                        max_length=10,
                    ),
                ),
                ("details", models.CharField(max_length=1000)),
                (
                    "audit",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="audit_status_history",
                        to="audits.Audit",
                    ),
                ),
            ],
            options={
                "ordering": ("-created_at",),
                "get_latest_by": "created_at",
                "abstract": False,
            },
        )
    ]
