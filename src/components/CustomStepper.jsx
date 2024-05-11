import { } from '@mui/material'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Check from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { FileContext } from '../contexts/FileContext';

const steps = ['upload your image', 'generate result'];

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));

function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}

QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
};

const CustomStepper = ({ activeStep, setActiveStep }) => {

    const { files, setFiles } = useContext(FileContext)

    const [skipped, setSkipped] = useState(new Set());

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleFileClear = () => {
        setFiles([]);
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} sx={{ marginTop: 2 }} connector={<QontoConnector />}>
                {steps.map((label, index) => {
                    const stepProps = {};

                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset} color='violet'>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color='violet'
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        {activeStep === 0 ?
                            <Button color='violet' onClick={handleFileClear} disabled={files.length <= 0}>Reset Images</Button> : <div></div>}
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleNext} color='violet' disabled={files.length <= 0}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}

        </Box>
    )
}

CustomStepper.propTypes = {
    activeStep: PropTypes.number.isRequired,
    setActiveStep: PropTypes.func.isRequired
};


export default CustomStepper
