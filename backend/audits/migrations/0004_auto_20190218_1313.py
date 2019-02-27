# Generated by Django 2.1.5 on 2019-02-18 13:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('audits', '0003_auto_20190206_1513'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='auditresults',
            name='wpt_metric_tti',
        ),
        migrations.AddField(
            model_name='auditresults',
            name='wpt_metric_first_view_first_contentful_paint',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='auditresults',
            name='wpt_metric_first_view_first_meaningful_paint',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='auditresults',
            name='wpt_metric_first_view_first_paint',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='auditresults',
            name='wpt_metric_first_view_load_time',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='auditresults',
            name='wpt_metric_first_view_speed_index',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='auditresults',
            name='wpt_metric_first_view_time_to_first_byte',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='auditresults',
            name='wpt_metric_first_view_tti',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='auditresults',
            name='wpt_metric_lighthouse_performance',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='auditresults',
            name='wpt_metric_repeat_view_first_contentful_paint',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='auditresults',
            name='wpt_metric_repeat_view_first_meaningful_paint',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='auditresults',
            name='wpt_metric_repeat_view_first_paint',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='auditresults',
            name='wpt_metric_repeat_view_load_time',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='auditresults',
            name='wpt_metric_repeat_view_speed_index',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='auditresults',
            name='wpt_metric_repeat_view_time_to_first_byte',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='auditresults',
            name='wpt_metric_repeat_view_tti',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='auditstatushistory',
            name='status',
            field=models.CharField(choices=[('REQUESTED', 'REQUESTED'), ('PENDING', 'PENDING'), ('ERROR', 'ERROR'), ('SUCCESS', 'SUCCESS')], max_length=10),
        ),
    ]